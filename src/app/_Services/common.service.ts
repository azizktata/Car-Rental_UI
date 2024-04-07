import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../_Models/client';
import { Voiture } from '../_Models/voiture';
import { Maintenance } from '../_Models/maintenance';
import { Mission } from '../_Models/mission';
import { DashData } from '../_Models/dashData';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private baseUrl = 'http://localhost:8383/';

  sharedData: string = ""

  constructor(
    private http: HttpClient,
  ) { }



  // Get all 
  getAllClients(): Observable<Client> {
    return this.http.get<Client>(`${this.baseUrl}/employes`);
  }
  getAllVoitures(): Observable<Voiture> {
    return this.http.get<Voiture>(`${this.baseUrl}/voitures`);
  }
  getAllReports(): Observable<Report> {
    return this.http.get<Report>(`${this.baseUrl}/reports`);
  }
  getAllMaintenances(): Observable<Maintenance> {
    return this.http.get<Maintenance>(`${this.baseUrl}/maintenances`);
  }
  getAllMissions(): Observable<Mission> {
    return this.http.get<Mission>(`${this.baseUrl}/missions`);
  }

  // get Dashboard
  getDash(): Observable<DashData> {
    return this.http.get<DashData>(`${this.baseUrl}/dash`);
  }

  // dispo and not dispo
  changeToDispo(id:number): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/voitures/${id}/dispo`,{});
  }
  changeToIndispo(id:number): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/voitures/${id}/indispo`,{});
  }

  // v or A
  changeToValid(id:number): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/mission/${id}/ok`,{});
  }
  changeToRefuse(id:number): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/missions/${id}/ko`,{});
  }

  // Ajouter

  addClient(createRequest:Client): Observable<any> {
    return this.http.post(`${this.baseUrl}/employes`,createRequest);
  }
  addMaintenance(createRequest:Maintenance): Observable<any> {
    return this.http.post(`${this.baseUrl}/maintenances`,createRequest);
  }
  addVoiture(createRequest:Voiture): Observable<any> {
    return this.http.post(`${this.baseUrl}/voitures`,createRequest);
  }
  addReport(createRequest:Report): Observable<any> {
    return this.http.post(`${this.baseUrl}/reports`,createRequest);
  }
  addMission(createRequest:Mission): Observable<any> {
    return this.http.post(`${this.baseUrl}/missions`,createRequest);
  }

  //delete
  deleteClient(id:number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/employes/${id}`);
  }
  deleteMaintenance(id:number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/maintenances/${id}`);
  }
  deleteReport(id:number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/reports/${id}`);
  }
  deleteVoiture(id:number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/voitures/${id}`);
  }
  deleteMission(id:number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/missions/${id}`);
  }

}
