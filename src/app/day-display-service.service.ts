import { Injectable } from '@angular/core';
import { Occurrence } from './components/item-list-components/budget-item/budget-item-dto';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DayDisplayServiceService {
  occurrences: any;
  occurrenceDays: number[] = []
  weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor() {
    this.occurrences = Object.values(Occurrence).filter(v => typeof v !== 'number');
    this.occurrenceDays = Array.from({ length: 31 }, (_, i) => i + 1);
  }
  //returns boolean to show/hide element based on occurrence dropdown value
  dropdownShow(value: number, form: FormGroup): boolean {
    switch (value) {
      //display nothing if never(0)
      case 0: {
        if (form.value.occurrence as unknown as number == 0) {
          return false;
        }
        else return true;
      }
      //if occurrence is monthly(1)
      case 1: {
        if (form && form.value.occurrence as unknown as number == 1) {
          return true;
        }
        else return false;
      }
      //if occurrence is weekly(2) or biweekly
      case 2: {
        if ((form && form.value.occurrence as unknown as number == 2) || (form && form.value.occurrence as unknown as number == 3)) {
          return true;
        }
        else return false;
      }
      default:
        //TODO ERROR HANDLING
        console.log("Error on item dropdown display")
        return false;
    }
  }
  //returns value to occurrenecDay based on occurrence value
  getDisplayDay(occurrence: number, occurrDay: number, occurrWeekday: number): number {
    switch (occurrence) {
      case 0: return 0;
      case 1: return occurrDay;
      case 2:
      case 3: return occurrWeekday;
      //TODO ERROR HANDLING
      default: console.log("Error: occurrencce out of range on occurrChange")
    }
    return 0;
  }
  //displays prefix to day display based on occurrence value
  dayPrefix(form: FormGroup): string {
    switch (form.value.occurrence) {
      case 0: return "";
      case 1: return "on day";
      case 2:
      case 3: return "on";
      //TODO ERROR HANDLING: 
      default: return "occurrence out of range"
    }
  }
}
