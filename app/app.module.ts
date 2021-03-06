import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { AnimalListComponent }  from './animal-list.component';
import { EditAnimalComponent } from './animal-edit.component';
import { NewAnimalComponent } from './animal-new.component';
import { AgePipe } from './age.pipe';

@NgModule({
  imports: [ BrowserModule,
            FormsModule ],
  declarations: [ AppComponent,
                  AnimalListComponent,
                  EditAnimalComponent,
                  NewAnimalComponent,
                  AgePipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
