import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
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
}
