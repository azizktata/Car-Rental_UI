import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  constructor(private router:Router){}

  showModel(modelName: string){
    var model = document.getElementById(modelName);
    if (model){
      model.classList.add('show');
      model.style.display = 'block';
    }
  }
  closeModel(modelName: string){
    var model = document.getElementById(modelName);
  if (model) {
    model.classList.remove('show');
    model.style.display = 'none';
  }
  }
  goToAddClientPage(){
    this.router.navigate(['clients/add']);
  }
}
