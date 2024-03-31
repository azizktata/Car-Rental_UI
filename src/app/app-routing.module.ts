import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { VoitureComponent } from './voiture/voiture.component';
import { MissionComponent } from './mission/mission.component';
import { AddVoitureComponent } from './voiture/add-voiture/add-voiture.component';
import { ClientComponent } from './client/client.component';
import { AddClientComponent } from './client/add-client/add-client.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'voitures', component: VoitureComponent},
  { path: 'voitures/add', component: AddVoitureComponent},
  { path: 'clients', component: ClientComponent},
  { path: 'clients/add', component: AddClientComponent},
  { path: 'missions', component: MissionComponent},



];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
