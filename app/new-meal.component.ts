import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="meal-form">
    <h3>Add a food you animal</h3>
    <input placeholder="Name" class="col-sm-8 input-lg" #newName>
    <input placeholder="Details" class="col-sm-8 input-lg" #newDetail>
    <input placeholder="Calories"class="col-sm-8 input-lg" #newCalories>
    <button (click)="addMeal(newName, newDetail, newCalories)" class="btn-success btn-lg add-button">Add</button>
    </div>
    `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<any>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userDetail: HTMLInputElement, userCalories: HTMLInputElement){
    var meal = [userName.value, userDetail.value, userCalories.value];
    this.onSubmitNewMeal.emit(meal);
    userName.value = "";
    userDetail.value = "";
    userCalories.value = "";
  }
}
