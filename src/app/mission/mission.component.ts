import { Component } from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent {
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
