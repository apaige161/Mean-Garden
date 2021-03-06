import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Main2Component } from './main2/main2.component';
import { GardensComponent } from './gardens/gardens.component';
import { IconSeedlingComponent } from './icon-seedling/icon-seedling.component';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




import { NgxPrintModule } from 'ngx-print';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';

import { FormsModule } from "@angular/forms";

import { AuthInterceptor } from './auth/auth-interceptor';
import { ErrorInterceptor } from './error-intercepter';

import { ErrorComponent } from './error/error.component';

import { AngularMaterialModule } from './angular-material.module'
import { PostsModule } from './posts/posts.module';
import { MoreInfoComponent } from './more-info/more-info.component';
import { EditPlantComponent } from './edit-plant/edit-plant.component';

import { DateFnsModule } from 'ngx-date-fns';
import { HarvestComponent } from './harvest/harvest.component';
import { YesNoPipe } from './pipes/yes-no.pipe';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

//services
//import { PostService } from './services/post.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    Main2Component,
    IconSeedlingComponent,
    GardensComponent,
    FilterPipe,
    SortPipe,
    MoreInfoComponent, 
    EditPlantComponent, 
    HarvestComponent, 
    YesNoPipe, HomeComponent, AboutComponent, FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    PostsModule,
    NgxPrintModule,
    DragDropModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule,
    DateFnsModule.forRoot(),
  ],
  providers: 
    [
      {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},//tells angular to not overide but add in addition to
      {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
    ], 
  bootstrap: [AppComponent],
  //tells angular this component will get used even though angular cant see it
  entryComponents: [ErrorComponent, MoreInfoComponent, EditPlantComponent],
})
export class AppModule { }
