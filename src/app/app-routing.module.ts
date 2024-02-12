import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FotoComponent } from './componenti/foto/foto.component';
import { AggiungiVideoComponent } from './componenti/aggiungi-video/aggiungi-video.component';
import { HomeComponent } from './componenti/home/home.component';



const routes: Routes = [
  {path:'', component:HomeComponent, data: { animation: 'homePage' }},
  {path: 'foto', component:FotoComponent, data: { animation: 'homePage' }},
  {path: 'aggiungiVideo', component:AggiungiVideoComponent},
  { path: 'sotto-componente/:nomeCanale', component: HomeComponent }
  
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// 