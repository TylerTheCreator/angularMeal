import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Track those meals Kimosabi!</h1>
      <meal-list
        [mealList]="meals"
        (onMealSelect)="mealWasSelected($event)">
      </meal-list>
    <div>
  `
})
export class AppComponent {
  public meals: Meal[]; 
  constructor(){
    this.meals = [
      new Meal("Food", "Details", 400, 0),
      new Meal("hamburger", "details", 300, 1),
      new Meal("coffee", "sick", 200, 2),
      new Meal("napkins", "not good to eat", 600, 3)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log('parent', clickedMeal);
  }
}
