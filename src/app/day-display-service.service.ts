import { Injectable } from '@angular/core';
import { Occurrence } from './components/item-list-components/budget-item/budget-item-dto';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DayDisplayServiceService {
  occurrences: any;
  occurrenceDisplay: string = "0";
  occurrenceDays: number[] = []
  weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor() {
    this.occurrences = Object.values(Occurrence).filter(v => typeof v !== 'number');
    this.occurrenceDays = Array.from({ length: 31 }, (_, i) => i + 1);
  }

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
        //TODO error
        console.log("Error on item dropdown display")
        return false;
    }
  }

  occurrChange(day: string, weekday: string, occurrence: string, form: FormGroup): void {
    switch (occurrence) {
      //test null on api
      case "0": {
        form.value.occurrenceDay = null;
        break;
      }
      case "1": {
        form.value.occurrenceDay = parseInt(day) + 1;
        break;
      }
      case "2": {
        if (parseInt(day) > 6) weekday = "0";
        form.value.occurrenceDay = this.weekDays.indexOf(weekday) + 1;
        break;
      }
      case "3": {
        if (parseInt(day) > 6) weekday = "0";
        form.value.occurrenceDay = this.weekDays.indexOf(weekday) + 1;
        break;
      }
      default:
        console.log("Error: occurrencce out of range on occurrChange")
    }
  }

}
