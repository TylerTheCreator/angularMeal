import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import {DonePipe} from './done.pipe';
import {DetailStatePipe} from './detail.pipe';
import {CaloriesStatePipe } from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [DonePipe, DetailStatePipe, CaloriesStatePipe],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `
  <select (change)="onChangeCalories($event.target.value)" class="filter">
    <option value="High">High</option>
    <option value="Low">Low</option>
    <option value="All" selected>All</option>
  </select>
  <meal-display *ngFor="#currentMeal of mealList | done:filterDone | calories:filterCalories"
    (click)="mealClicked(currentMeal)"
    [class.selected]="currentMeal === selectedMeal"
    [meal]="currentMeal">
  </meal-display>
  <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
  </edit-meal-details>
  <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterDone: string = "All";
  public filterDetail: string = "High";
  public filterCalories: string = "All";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {

    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(meal: any): void {
    this.mealList.push(
      new Meal(meal[0], meal[1], meal[2], this.mealList.length)
    );
  }
  onChange(filterOption) {
    this.filterDone = filterOption;
  }
  onChangeDetail(filterOption) {
    this.filterDetail = filterOption;
  }
  onChangeCalories(filterOption) {
    this.filterCalories = filterOption
  }
}
