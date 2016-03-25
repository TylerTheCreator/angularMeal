import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';


@Pipe({
  name: "detail",
  pure: false
})

export class DetailStatePipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredDoneState = args[0];
    if(desiredDoneState === "High") {
      return input.filter((meal) => {
        console.log(meal.detail);
        return meal.detail === "High";
      });
    } else if (desiredDoneState === "Medium") {
        return input.filter((meal) => {
          return meal.detail === "Medium";
      });
    } else if (desiredDoneState === "Low") {
      return input.filter((meal) => {
        return meal.detail === "Low";
      });
    } else {
      return input;
    }
  }
}
