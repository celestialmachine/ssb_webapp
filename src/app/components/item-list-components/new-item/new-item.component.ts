import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BudgetItemComponent } from '../budget-item/budget-item.component';
import { BudgetItemDto, Occurrence } from '../budget-item/budget-item-dto';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit{
  //item!: BudgetItemDto;
  //editActive: boolean = false;
  keys = Object.keys;
  occurrences: any;
  //display values for due date
  occurrenceDisplay: string = "0";
  occurrenceDays: number[] = []
  weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  newItemForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    description: new FormControl(''),
    occurrence: new FormControl(''),
    occurrenceDay: new FormControl(1),
    amount: new FormControl(0)
  });
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.occurrences = Object.values(Occurrence).filter(v => typeof v !== 'number');
    this.occurrenceDays = Array.from({ length: 31 }, (_, i) => i + 1);
    this.initializeForm();
  }

  initializeForm(): void {
    this.newItemForm.patchValue({
      occurrence: "1",
      occurrenceDay: 1
    })
  }

  @Output() addEvent = new EventEmitter<BudgetItemDto>();
  addNewItem(): void {
    let item = <BudgetItemDto>{};
    item.name = this.newItemForm.value.name as string;
    item.description = this.newItemForm.value.description as string;
    item.occurrence = parseInt(this.newItemForm.value.occurrence as string);
    item.occurrenceDay = this.newItemForm.value.occurrenceDay as number;
    item.amount = this.newItemForm.value.amount as number;
    this.addEvent.emit(item)
  }

  //Refactor to global or make separate component out of dropdown. Duplicate code on new item form
  occurrDropdown(value: number): boolean {
    switch (value) {
      //display nothing if never(0)
      case 0: {
        if (this.newItemForm.value.occurrence as unknown as number == 0) {
          return false;
        }
        else return true;
      }
      //if occurrence is monthly(1)
      case 1: {
        if (this.newItemForm && this.newItemForm.value.occurrence as unknown as number == 1) {
          return true;
        }
        else return false;
      }
      //if occurrence is weekly(2) or biweekly
      case 2: {
        if ((this.newItemForm && this.newItemForm.value.occurrence as unknown as number == 2) || (this.newItemForm && this.newItemForm.value.occurrence as unknown as number == 3)) {
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
  weekdayChange(value: string): void {
    //TODO handle out of range error for range outside weekdays array
    this.newItemForm.value.occurrenceDay = this.weekDays.indexOf(value) + 1;
  }
}
