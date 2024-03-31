import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home/home.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { TopbarComponent } from './navbar/topbar/topbar.component';
import { VoitureComponent } from './voiture/voiture.component';
import { DataTablesModule } from 'angular-datatables';
import { MissionComponent } from './mission/mission.component';
import { AddVoitureComponent } from './voiture/add-voiture/add-voiture.component';
import { DetailsVoitureComponent } from './voiture/details-voiture/details-voiture.component';
import { ClientComponent } from './client/client.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { DetailsClientComponent } from './client/details-client/details-client.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TopbarComponent,
    VoitureComponent,
    MissionComponent,
    AddVoitureComponent,
    DetailsVoitureComponent,
    ClientComponent,
    AddClientComponent,
    DetailsClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
