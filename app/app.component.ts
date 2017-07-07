import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
   <div class="container" id="title">
      <h1>Kalima Zoo Animal Tracker {{month}}/{{day}}/{{year}}</h1>
      <hr>
      <div class="container" id="list">
        <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
      </div>
      <animal-edit [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></animal-edit>
      <animal-new (newAnimalSender)="addAnimal($event)"></animal-new>
  </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedAnimal = null;

  masterAnimalList: Animal [] = [
    new Animal("Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises"),
    new Animal("Ocelot", "Prince", 4, "Carnivore", "Purple Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based"),
    new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud Noises")
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

}
