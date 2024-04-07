import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.css']
})
export class AddVoitureComponent {
  constructor(private router:Router){
  }
  goToVoiturePage(){
    this.router.navigate(['voitures']);
  }
}
