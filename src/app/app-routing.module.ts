import { BookComponent } from './book/book.component';
import { GeneralComponent } from './general/general.component';
import { Arena2Component } from './arena2/arena2.component';
import { Arena1Component } from './arena1/arena1.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ToursComponent } from './tours/tours.component';
import { TrainingComponent } from './training/training.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'home' , pathMatch:'full'},
  {path:'home',  component:HomeComponent},
  {path:'about',  component:AboutComponent},
  {path:'gallery',  component:GalleryComponent},
  {path:'arena1' , component:Arena1Component},
  {path:'arena2' , component:Arena2Component},
  {path:'general' , component:GeneralComponent},
  {path:'training',  component:TrainingComponent},
  {path:'tours',  component:ToursComponent},
  {path:'login',  component:LoginComponent},
  {path:'register',  component:RegisterComponent},
  {path:'book' , component:BookComponent},
  
  
  
  
  
  
  {path:'**',  component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
