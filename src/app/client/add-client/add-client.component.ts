import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/_Models/client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
  constructor(private router:Router){}
  employeRequest = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    fonction: ""
  } as Client
  
  goToClientPage(){
    this.router.navigate(['clients']);
  }
}
