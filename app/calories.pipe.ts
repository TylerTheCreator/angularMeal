import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';


@Pipe({
  name: "calories",
  pure: false  // can we do this without a boolean case
})

export class CaloriesStatePipe implements PipeTransform{
  transform(input: Meal[], args){
    var desiredDoneState = args[0];
    if(desiredDoneState === "Low") {
      return input.filter((meal) => {
        return meal.calories <= 300;
      });
    } else if (desiredDoneState === "High") {
      return input.filter((meal)=> {
        return meal.calories > 300;
      });
    } else {
      return input;
    }
  }// end of transform
}
