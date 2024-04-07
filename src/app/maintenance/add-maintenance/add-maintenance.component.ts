import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-maintenance',
  templateUrl: './add-maintenance.component.html',
  styleUrls: ['./add-maintenance.component.css']
})
export class AddMaintenanceComponent {
  constructor(private router:Router){
  }
  goToVoiturePage(){
    this.router.navigate(['maintenances']);
  }
}
