import { Injectable } from '@angular/core';
import { FullPlant } from '../models/full-plant';

@Injectable({
  providedIn: 'root'
})

/******************************************************************************************************
* 
* hold plant objects
* 
******************************************************************************************************/
export class PlantDataService {

  constructor() { }

  vegatables: FullPlant[] = [
    {
      plant: 'empty',
      plantType: 'vegatable',
      season: 'spring, summer, fall, winter',
      perFoot: 1,
      multiHarvest: false,
      growthModifier: 1,
      daysToHarvest: 0,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'beans, bush',
      plantType: 'vegatable',
      season: 'spring, fall',
      perFoot: 1,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 70,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'beans, pole',
      plantType: 'vegatable',
      season: 'spring, fall',
      perFoot: 1,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 56,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'beets',
      plantType: 'vegatable',
      season: 'spring, fall',
      perFoot: 9,
      multiHarvest: false,
      growthModifier: 1,
      daysToHarvest: 56,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'broccoli',
      plantType: 'vegatable',
      season: 'spring, fall',
      perFoot: 1,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 112,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'cabbage',
      plantType: 'vegatable',
      season: 'summer',
      perFoot: 1,
      multiHarvest: false,
      growthModifier: 1,
      daysToHarvest: 112,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'carrot',
      plantType: 'vegatable',
      season: 'spring, fall',
      perFoot: 16,
      multiHarvest: false,
      growthModifier: 1,
      daysToHarvest: 70,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'cauliflower',
      plantType: 'vegatable',
      season: 'spring, fall',
      perFoot: 1,
      multiHarvest: false,
      growthModifier: 1,
      daysToHarvest: 98,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'chard, swiss',
      plantType: 'vegatable',
      season: 'spring, fall',
      perFoot: 2,
      multiHarvest: false,
      growthModifier: 1,
      daysToHarvest: 56,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'corn',
      plantType: 'vegatable',
      season: 'summer',
      perFoot: 4,
      multiHarvest: false,
      growthModifier: 1,
      daysToHarvest: 63,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'cucumber',
      plantType: 'vegatable',
      season: 'spring, fall',
      perFoot: 1,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 42,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'eggplant',
      plantType: 'vegatable',
      season: 'summer',
      perFoot: 1,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 133,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'leeks',
      plantType: 'vegatable',
      season: 'spring, fall',
      perFoot: 6,
      multiHarvest: false,
      growthModifier: 1,
      daysToHarvest: 98,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'lettuce, leaf',
      plantType: 'vegatable',
      season: 'spring, summer, fall, winter',
      perFoot: 16,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 49,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'lettuce, head',
      plantType: 'vegatable',
      season: 'spring, summer, fall, winter',
      perFoot: 1,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 49,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'melon',
      plantType: 'vegatable',
      season: 'summer',
      perFoot: .5,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 84,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'okra',
      plantType: 'vegatable',
      season: 'summer',
      perFoot: 1,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 84,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'onion',
      plantType: 'vegatable',
      season: 'spring, summer',
      perFoot: 9,
      multiHarvest: false,
      growthModifier: 1,
      daysToHarvest: 140,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'parsley',
      plantType: 'vegatable',
      season: 'spring, summer, fall, winter',
      perFoot: 1,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 98,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'parsnips',
      plantType: 'vegatable',
      season: 'spring, fall',
      perFoot: 9,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 105,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'pea, sugar snap',
      plantType: 'vegatable',
      season: 'spring, fall',
      perFoot: 8,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 70,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'pepper, hot',
      plantType: 'vegatable',
      season: 'summer',
      perFoot: 1,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 133,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'pepper, mild',
      plantType: 'vegatable',
      season: 'summer',
      perFoot: 1,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 133,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'pepper, bell',
      plantType: 'vegatable',
      season: 'summer',
      perFoot: 1,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 133,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'potato',
      plantType: 'vegatable',
      season: 'spring, summer, fall',
      perFoot: 1,
      multiHarvest: false,
      growthModifier: 1,
      daysToHarvest: 84,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'pumpkin, vine',
      plantType: 'vegatable',
      season: 'spring, fall',
      perFoot: .5,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 84,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'radish',
      plantType: 'vegatable',
      season: 'spring, summer, fall',
      perFoot: 16,
      multiHarvest: false,
      growthModifier: 1,
      daysToHarvest: 28,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'spinach',
      plantType: 'vegatable',
      season: 'spring, summer, fall',
      perFoot: 9,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 49,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'strawberry',
      plantType: 'vegatable',
      season: 'spring, fall',
      perFoot: 4,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 70,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'squash, vine',
      plantType: 'vegatable',
      season: 'summer',
      perFoot: .5,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 28,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'tomato, vine',
      plantType: 'vegatable',
      season: 'summer',
      perFoot: 1,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 28,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
  ];

  herbs: FullPlant[] = [
    {
      plant: 'empty',
      plantType: 'herb',
      season: 'spring, summer, fall, winter',
      perFoot: 1,
      multiHarvest: false,
      growthModifier: 1,
      daysToHarvest: 0,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'basil',
      plantType: 'herb',
      season: 'spring, fall',
      perFoot: 2,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 84,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'chive',
      plantType: 'herb',
      season: 'spring, summer',
      perFoot: 16,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 112,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'cilantro',
      plantType: 'herb',
      season: 'late spring, summer',
      perFoot: 1,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 35,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'mint',
      plantType: 'herb',
      season: 'spring, summer, fall',
      perFoot: 1,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 35,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'oregano',
      plantType: 'herb',
      season: 'spring, summer, fall',
      perFoot: 1,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 112,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
  ];

  flowers: FullPlant[] = [
    {
      plant: 'empty',
      plantType: 'flower',
      season: 'spring, summer, fall, winter',
      perFoot: 1,
      multiHarvest: false,
      growthModifier: 1,
      daysToHarvest: 0,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'dahlia, small',
      plantType: 'flower',
      season: 'summer, fall',
      perFoot: 4,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 70,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'dahlia, medium',
      plantType: 'flower',
      season: 'summer, fall',
      perFoot: 1,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 70,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'dusty miller',
      plantType: 'flower',
      season: 'late spring, summer, fall',
      perFoot: 4,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 105,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'marigold',
      plantType: 'flower',
      season: 'summer, fall',
      perFoot: 1,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 70,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'pansy',
      plantType: 'flower',
      season: 'spring, summer, fall',
      perFoot: 4,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 140,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'petunia',
      plantType: 'flower',
      season: 'late spring, summer, early fall',
      perFoot: 4,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 98,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
    {
      plant: 'salvia',
      plantType: 'flower',
      season: 'late spring, summer, early fall',
      perFoot: 4,
      multiHarvest: true,
      growthModifier: 1,
      daysToHarvest: 98,
      datePlanted: null,
      dateToHarvest: null,
      daysLeftToHarvest: null,
      progressToHarvest: null,
      zone: '7b',
      col: 0
    },
  ]
}
