import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template:

  `
    <div class="meal-form">
      <label> Details: {{ meal.detail }} | calories: {{ meal.calories }}</label>
      <h3>Edit Food: </h3>
      <label> Details: {{ meal.detail }} | calories: {{ meal.calories }}</label>
      <input [(ngModel)]="meal.detail" class="col-sm-8 input-lg meal-form"/>
      <input [(ngModel)]="meal.calories" class="col-sm-8 input-lg meal-form"/>
      <input [(ngModel)]="meal.name" class="col-sm-8 input-lg meal-form"/>

    </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
  public detail: Meal;
  public calories: Meal;
}
