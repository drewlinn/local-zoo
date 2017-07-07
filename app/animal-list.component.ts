import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allAnimals">All Animals</option>
      <option value="under2">Animals under 2 years old</option>
      <option value="2andOver">Animals 2 years and older</option>
    </select>
    <ul>
      <li (click)="isYoung(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | age:filterByAge">{{{currentAnimal.name}} {currentAnimal.age}}
        <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
      </li>
    </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  filterByAge: string = "under2";
}
