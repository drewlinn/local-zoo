import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-new',
  template: `
  <h1>New Animal</h1>
  <div class="container">
    <label>Enter Animal Species:</label>
    <input #newSpecies>
    <label>Enter Animal Name:</label>
    <input #newName>
    <label>Enter Animal Age:</label>
    <input #newAge>
    <label>Enter Animal Diet:</label>
    <input #newDiet>
    <label>Enter Animal Location:</label>
    <input #newLocation>
    <label>Enter Animal Caretakers:</label>
    <input #newCaretakers>
    <label>Enter Animal Sex:</label>
    <select #newSex>
      <option value="female">Female</option>
      <option value="male">Male</option>
      <option value="other">Other</option>
    </select>
    <label>Enter Animal Likes:</label>
    <input #newLikes>
    <label>Enter Animal Dislikes:</label>
    <input #newDislikes>
    <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
  </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }

}
