import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router:Router){}

  goToVoiturePage(){
    this.router.navigate(["/voitures"]);  
  }
  goToClientPage(){
    this.router.navigate(["/clients"]);  
  }
  goToMissionPage(){
    this.router.navigate(["/missions"]);  
  }
  goToReportPage(){
    this.router.navigate(["/reports"]);  
  }
  goToMaintenancePage(){
    this.router.navigate(["/maintenances"]);  
  }
}
