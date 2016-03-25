import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "done", //refer to the pipe
  pure: false //false because we want it to false initially
})
export class DonePipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredDoneState = args[0];
    // console.log(args);
    if(desiredDoneState === "done") {
      return input.filter((meal) => {
        return meal.done;
      });
    }else if (desiredDoneState === "notDone") {
      return input.filter((meal) => {
        return !meal.done;
      });
    } else {
      return input;
    }
  }
}
