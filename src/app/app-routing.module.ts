import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { VoitureComponent } from './voiture/voiture.component';
import { MissionComponent } from './mission/mission.component';
import { AddVoitureComponent } from './voiture/add-voiture/add-voiture.component';
import { ClientComponent } from './client/client.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { DetailsClientComponent } from './details-client/details-client.component';
import { ReportComponent } from './report/report.component';
import { DetailsVoitureComponent } from './voiture/details-voiture/details-voiture.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { AddMaintenanceComponent } from './maintenance/add-maintenance/add-maintenance.component';
import { UpdateVoitureComponent } from './voiture/update-voiture/update-voiture.component';
import { UpdateMaintenanceComponent } from './maintenance/update-maintenance/update-maintenance.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent},
  { path: 'voitures', component: VoitureComponent},
  { path: 'voitures/add', component: AddVoitureComponent},
  { path: 'voitures/update/:id', component: UpdateVoitureComponent},

  // { path: 'voitures/details', component: DetailsVoitureComponent},
  { path: 'clients', component: ClientComponent},
  { path: 'clients/details', component: DetailsClientComponent},
  { path: 'clients/add', component: AddClientComponent},
  { path: 'missions', component: MissionComponent},
  { path: 'reports', component: ReportComponent},
  { path: 'maintenances', component: MaintenanceComponent},
  { path: 'maintenances/add', component: AddMaintenanceComponent},
  { path: 'maintenances/update/:id', component: UpdateMaintenanceComponent},



];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
