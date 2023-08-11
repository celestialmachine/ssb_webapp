import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BudgetItemDto, Occurrence } from '../budget-item/budget-item-dto';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DayDisplayServiceService } from '../../../day-display-service.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit{
  keys = Object.keys;
  newItemForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    description: new FormControl(''),
    occurrence: new FormControl(1),
    occurrenceDay: new FormControl(1),
    occurrenceWeekday: new FormControl(1),
    amount: new FormControl(0)
  });

  constructor(private formBuilder: FormBuilder, public dayDisplay: DayDisplayServiceService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.newItemForm.patchValue({
      occurrence: 1,
      occurrenceDay: 1,
      occurrenceWeekday: 1
    })
  }

  @Output() addEvent = new EventEmitter<BudgetItemDto>();
  addNewItem(): void {
    let item = <BudgetItemDto>{};
    item.name = this.newItemForm.value.name as string;
    item.description = this.newItemForm.value.description as string;
    item.occurrence = this.newItemForm.value.occurrence as number;
    item.occurrenceDay = this.dayDisplay.getDisplayDay(this.newItemForm.value.occurrence as number,
      this.newItemForm.value.occurrenceDay as number,
      this.newItemForm.value.occurrenceWeekday as number);
    item.amount = this.newItemForm.value.amount as number;
    console.log(item);
    this.addEvent.emit(item)
  }

}
