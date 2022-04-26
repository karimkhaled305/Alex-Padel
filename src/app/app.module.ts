import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TrainingComponent } from './training/training.component';
import { ToursComponent } from './tours/tours.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GeneralComponent } from './general/general.component';
import { Arena1Component } from './arena1/arena1.component';
import { Arena2Component } from './arena2/arena2.component';
import { BookComponent } from './book/book.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    TrainingComponent,
    ToursComponent,
    NotfoundComponent,
    GeneralComponent,
    Arena1Component,
    Arena2Component,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    RouterModule, 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
