# _Local Zoo_

#### An application for tracking properties of the animals in a zoo, 07/07/17

#### By **Andrew Dalton**

## Description

  This application is designed to allow the user to track the animals in their zoo. It will track a given animal's Species, Name, Age, Diet, Location within the zoo, the amount of Caretakers they need, their Sex, their Likes and their Dislikes. It will allow the user to View, Edit, and Create new instances of an animal object..

## Planning

1. Configuration/dependencies

  * Make sure that the following packages are properly installed before attempting to run this application.

    * Node Packages
      * The following were implemented for use in our Development Environment and are utilized through our gulpfile.js file.
        * gulp - allows us to run gulp commands on our project to ease the development process.
        * browser-sync - allows us to see our changes to our project as we save them.
        * vinyl-source-stream - puts our browserified source code into a new file.
        * gulp-concat - concatenates our JS files into one.
        * gulp-uglify - consolidates our code into a form that is more easily digestible by the browser.
        * gulp-util - allows us to manage environment variables.
        * del - deletes all the files that are passed as arguments into the command.
        * sass - translates our files into normal CSS .
        * sourcemaps - adds some code which allows us to see which Sass files are responsible for each CSS rule that we see in the browser.
        * bower-files - installs the necessary files on which our front-end package manager depends.

    * Bower Packages
      * The following were implemented in our Production Environment and are utilized in our project's styles and functionality.
        * bootstrap - provides us with some rudimentary page styling tools.
        * moment.js - allows us to implement time and date related data.

  2. Specifications
  
  | Behavior | Input | Output |
  | :--------| :---- | :------|
  | User can view a list of all the animals in the zoo. | "application start" | "Moon, Prince, Tinkerbell" |
  | User can filter the list of animals by their age. | "Animals over 2 years old" | "Moon, Prince, Tinkerbell" |
  | User can view an individual instance of an animal and their details. | "Moon" | "Species: Arctic Fox, Name: Moon, Age: 2, Diet: Carnivore, Location: Northern Trail, Caretakers: 5, Sex: Female, Likes: Cool shade, Dislikes: Loud noises." |
  | User can create new instances of an animal. | "Add new Animal" | "Species: Wolverine, Name: James Howlett, Age: 137, Diet: Carnivore, Location: Canadian Wilderness, Caretakers: 616, Sex: Male, Likes: Cigars, Dislikes: Boundaries |
  | User can edit any instance of an animal. | "Name: James Howlett, EDIT" | "Name: Logan" |
  | (Stretch Goal) User can delete instances of an animal. | "Name: Moon, DELETE" | "This animal is no longer in this zoo" |

3. Integration
  * index.html for application entry and navigation and viewing a list of all animals.
  * animal.html page for viewing an individual animal.
  * animal-new.html page for for adding a new instance of an animal.
  * animal-edit.html page for modifying an existing animal's information.
  * Integrate feature that deletes instances of an animal.

4. UX/UI
  * Bootstrap

## Setup/Installation Requirements

* Open your console or powershell command line.
* In your command line, navigate to the desktop or your desired folder destination.
* Copy the project's github address (https://github.com/drewlinn/local-zoo.git)
* Write in your console the command "git clone" and paste the project address afterward and press enter.
* Perform 'npm install' and 'bower install' commands
* Perform the commands 'gulp build' followed by 'gulp-serve' and the application should open in your default web browser.

## Known Bugs

MasterAnimalList does not display by default, but will display if "All Animals" is selected after having already selected either "2andOver" and "under2". Working on a fix.

## Support and contact details

If you find any bugs or other issues with my code, please contact me by emailing expandrew@gmail.com

## Technologies Used

  * HTML
  * Javascript
  * Typescript
  * Angular2
  * jQuery
  * CSS
  * SCSS
  * Bootstrap
  * Node Package Manager
  * Bower

### License

*This software is licensed under the GPL*

Copyright (c) 2016 **_Andrew Dalton, Epicodus_**
