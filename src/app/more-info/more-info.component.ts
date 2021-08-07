
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { SinglePlant } from '../models/single-plant';
import { PlantServerService } from '../services/plant-server.service';
import { addDays, differenceInDays, startOfDay  } from 'date-fns'
import { EditPlantComponent } from '../edit-plant/edit-plant.component';
import { PlantDataService } from '../services/plant-data.service';
import { FullPlant } from '../models/full-plant';



@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit, OnDestroy {

  singlePlant: any;
  newDate: Date;
  hideDatePicker: boolean = true;
  plantSubscription: Subscription;
  addAWeekModified: boolean = false;

  growthModifier: number = 1;
  hideGrowthModifier: boolean = true;

  editPlant: boolean = false;
  harvestPlantBool: boolean = false;

  //radio button properties
  favoritePlantType: string = 'vegatables'
  plantTypes: string[] = ['vegatables', 'herbs', 'flowers'];

  favoriteSeason: string = 'spring';
  seasons: string[] = ['spring', 'summer', 'fall', 'winter'];

  constructor( 
    @Inject(MAT_DIALOG_DATA) 
    public data: {_id: string}, 
    private matDialogRef: MatDialogRef<MoreInfoComponent>,
    private plantData: PlantDataService,
    private plantService: PlantServerService
  ) { }

  //arrays to hold the plant objects
  vegatablesArr: FullPlant[] = this.plantData.vegatables;
  herbsArr: FullPlant[] = this.plantData.herbs;
  flowersArr: FullPlant[] = this.plantData.flowers;

  closeInfo() {
    this.matDialogRef.close();
  }

  /************************************************
  * 
  * show/hide functions
  * 
  ************************************************/
  toggleHideDatePicker() {
    this.hideDatePicker = !this.hideDatePicker;
  }

  toggleHideGrowthModifier() {
    this.hideGrowthModifier = !this.hideGrowthModifier;
  }

  toggleEditPlant() {
    this.editPlant = !this.editPlant;
  }

  /************************************************
  * 
  * return only the items with season that are passed in
  *   -goal is to remove the empty spaces
  * 
  ************************************************/

   filteredArr = [];

   getSelectedSeason(arr:any, season) {
     
     arr.forEach(plant => {
       if(plant.season.includes(season)) {
         this.filteredArr.push(plant)
       }
     });

   }

   resetSeasonSelector() {
     this.filteredArr = []
   }

  /************************************************
  * 
  * Update plant parts
  * 
  ************************************************/
  getSinglePlant(id: string) {
    return this.plantService.getOnePlant(id)
  }

  saveNewDate() {
    if(this.newDate != this.singlePlant.datePlanted && this.newDate) {
      this.singlePlant.datePlanted = this.newDate;

      this.getPlantProgress(this.singlePlant);

      //send updated date -> service -> database to be stored

      //update when planted
      this.plantService.updateOnePlantPlanted(
        this.singlePlant._id,
        this.singlePlant.datePlanted,
      )

      //console.log("Should update dateToHarvest to: " + this.singlePlant.dateToHarvest)
      //update when harvest time
      this.plantService.updateOnePlantHarvested(
        this.singlePlant._id,
        this.singlePlant.dateToHarvest
        
      )
    }
  }

  saveNewGrowthModifier() {
    //send updated GrowthModifier -> service -> backend route -> database to be stored
    //update growthModifier
    //console.log("Replacing growth modifier... " + this.singlePlant._id);
    this.plantService.updateOnePlantGrowthModifier(
      this.singlePlant._id,
      this.singlePlant.growthModifier,
    )
  }

  /*********************************************************************************************
  * 
  * Replace plant
  *   TODO:***BUG: can save before selecting a plant to replace with
  *   -leaves same Id, x/y/col attributes
  * 
  ***********************************************************************************************/

  idToSave = ''
  today = new Date();

  //for whatever reason replacePlant will not accept _.id so leave this here
  saveId() {
    this.idToSave = this.singlePlant._id;
    //console.log("Replacing plant name by ID... " + this.idToSave);

  }

  replacePlant() {
    //send updated GrowthModifier -> service -> backend route -> database to be stored
    //update plant name + plantType + season + perFoot + growthModifier + daysToHarvest + datePlanted
    this.plantService.updatePlant(
      this.idToSave,
      this.singlePlant.plant,
      this.singlePlant.plantType,
      this.singlePlant.season,
      this.singlePlant.perFoot,
      this.singlePlant.growthModifier,
      this.singlePlant.daysToHarvest,
      this.today,
    )
  }

  /*********************************************************************************************
  * 
  * Harvest plant
  *   -if plant has multiple harvests is this the last one?????????
  *   -does plant have more than one harvest?????
  *     -make an option to replace after harvest
  *       -if no option is selected replace with 'empty'
  *   -do i store how many total pounds or ounces, quantity(if multiHarvest = true), quality?????
  * 
  *   TODO: Quality [dropdown or radio buttons]?
  * 
  *   Create new object for harvested objects ^
  *   Send data to service -> node -> mongoDb
  * 
  *   get how many plants were harvested (perFoot)
  *   send plant type
  * 
  ***********************************************************************************************/

  //quality choice list
  qualityPicker: string[] = [
    "poor",
    "fair",
    "good",
    "better",
    "best"
  ];

  toggleHavestOptions() {
    this.harvestPlantBool = !this.harvestPlantBool;
  }

  qualityOfHarvest: string = "good";

  //TODO: quantity may be set by user if multiHarvest=true
  quantity: number = 1;

  harvestPlant(plantToHarvest) {

    const harvestData = {
      owner: plantToHarvest.owner,
      date: this.today,
      plant: plantToHarvest.plant,
      quality: this.qualityOfHarvest,
      perFoot: plantToHarvest.perFoot,
      //quantity may be set by user if multiHarvest=true
      quantity: this.quantity,
      plantType: plantToHarvest.plantType
    }

    
    console.log("Harvested Data: ");
    console.log(harvestData);

  }

  /**************************************************************************************
  * 
  * harvest progress logic
  *   TODO: fix addOneWeek
  *   -code updates and send request to change the date, then it gets changed back
  *  
  **************************************************************************************/

  addOneWeek(plant) {

    //add 7 days
    plant.dateToHarvest = new Date( plant.dateToHarvest );
    plant.dateToHarvest = addDays(plant.dateToHarvest, 7);

    //set

    //console.log("updating harvest date");
    //save to DB
    this.plantService.updateOnePlantHarvested(
      plant._id,
      plant.dateToHarvest
    )
    //console.log("updated harvest date to: " + plant.dateToHarvest);

    this.addAWeekModified = true;
  }

  //run for each loop over selected garden items to get date data

  getPlantProgress(plant) {

    const today: Date = new Date();

    //parse JSON date into date -- JSON returns a string
    plant.datePlanted = new Date( plant.datePlanted );
    plant.datePlanted = startOfDay(plant.datePlanted);
    
    //add number of days to planting date, factor in growth conditions
    plant.daysToHarvest = Math.round(plant.daysToHarvest / plant.growthModifier )
    plant.dateToHarvest = new Date();
    plant.dateToHarvest = startOfDay(plant.dateToHarvest);
    plant.dateToHarvest = addDays(plant.datePlanted, plant.daysToHarvest);
    plant.dateToHarvest = addDays(plant.dateToHarvest, 1);

    //calculate how many days are left until dateToHarvest
    //how many days are between today and expected harvest date
    plant.daysLeftToHarvest = differenceInDays(plant.dateToHarvest.getTime(), today.getTime())

    //calculate how many days are left and return a whole number to pass to spinner
    //calculate % out of 100 based on how many days are left to harvest
    plant.progressToHarvest = Math.floor(( 1 - (plant.daysLeftToHarvest / plant.daysToHarvest)) * 100);

    if(plant.daysLeftToHarvest <= 0) {
      plant.progressToHarvest = 100;
      plant.dateToHarvest = today;
      plant.daysLeftToHarvest = 0;
    }

    if(plant.plant == "empty") {
      plant.progressToHarvest = 0;
      plant.dateToHarvest = today;
      plant.daysLeftToHarvest = 0;
    }

  }

  //progress bar logic
  color: ThemePalette = 'primary';
  value: number = 0; //out of 100
  diameter = 50;


  ngOnInit() {

    this.plantSubscription = this.getSinglePlant(this.data._id).subscribe(plant => {
      this.singlePlant = plant
      this.getPlantProgress(this.singlePlant);
    });

    

    

  }

  ngOnDestroy() {

    this.plantSubscription.unsubscribe();

    //pass in data to be transfered
    this.matDialogRef.close(this.data)


  }

}
