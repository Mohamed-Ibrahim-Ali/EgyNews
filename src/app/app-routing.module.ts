import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SportComponent } from './components/sport/sport.component';
import { ArtsComponent } from './components/arts/arts.component';

const routes: Routes = [
  {path:'' , component:HomeComponent },
  {path:'Sports' , component:SportComponent},
  {path:'En' , component:ArtsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
