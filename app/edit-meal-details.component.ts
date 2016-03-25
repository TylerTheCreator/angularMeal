import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template:
// TWO WAY DATABINDING! ngModel special directive
// When we display the name, data is just moving out, from the model to the view. We want to go the other way too - we want to enter a new name into the view using a form and have it travel back through the controller to the model and change the value of the property. We can do that with a special directive called [(ngModel)].
  `
    <div class="meal-form">
      <label> Details: {{ meal.detail }} | calories: {{ meal.calories }}</label>
      <h3>Edit Food: </h3>
      <label> Details: {{ meal.detail }} | calories: {{ meal.calories }}</label>
      <input [(ngModel)]="meal.detail" class="col-sm-8 input-lg meal-form"/>
      <input [(ngModel)]="meal.calories" class="col-sm-8 input-lg meal-form"/>
      <input [(ngModel)]="meal.name" class="col-sm-8 input-lg meal-form"/>

    </div>
  `//WHEN WORD CLICK THIS SHOW DETAILS AND CALORIES
})
export class EditMealDetailsComponent {
  public meal: Meal;
  public detail: Meal;
  public calories: Meal;
}
