import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BudgetItemDto, Occurrence } from '../budget-item/budget-item-dto';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.css']
})
export class BudgetItemComponent implements OnInit{
  //bound properties to toggle button dropdowns with unique attribute values per component, set at ngOnInit()
  itemDropDownTarget: string = "item-collapse";
  dataToggleAttr: string = "";
  //bound properties to toggle form edit/save display state
  editActive: boolean = false;
  //Consider using an occurence global service
  keys = Object.keys;
  occurrences: any;
  //display values for due date
  occurrenceDisplay: string = "0";
  occurrenceDays: number[] = []
  weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  //model
  @Input() item!: BudgetItemDto;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //initalize dropdown targets by id
    this.itemDropDownTarget += this.item.id?.toString();
    this.dataToggleAttr = "#" + this.itemDropDownTarget;
    this.occurrences = Object.values(Occurrence).filter(v => typeof v !== 'number');
    this.occurrenceDays = Array.from({ length: 31 }, (_, i) => i + 1);
    //set initial form values from item model
    this.initializeForm();
    this.updateDay();
  }

  itemForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    description: new FormControl(''),
    occurrence: new FormControl(''),
    occurrenceDay: new FormControl(0),
    amount: new FormControl(0),
  });


  initializeForm(): void {
    this.itemForm.patchValue({
      id: this.item.id,
      name: this.item.name,
      description: this.item.description,
      occurrence: this.item.occurrence.toString(),
      occurrenceDay: this.item.occurrenceDay,
      amount: this.item.amount
    })
  }

  toggleEditMode(): void {
    this.editActive = !this.editActive;
    this.updateDay();
    //stops form from collapsing when on edit mode
    this.itemDropDownTarget = this.itemDropDownTarget ? "" : "item-collapse" + this.item.id?.toString();
  }

  @Output() updateEvent = new EventEmitter<BudgetItemDto>();
  updateSelf(): void {
    //copy all form values to model
    this.item.name = this.itemForm.value.name as string;
    this.item.description = this.itemForm.value.description as string;
    this.item.occurrence = parseInt(this.itemForm.value.occurrence as string);
    this.item.occurrenceDay = this.itemForm.value.occurrenceDay as number;
    this.item.amount = this.itemForm.value.amount as number;
    //pass model to event emitter then toggle edit mode
    this.updateEvent.emit(this.item);
    this.toggleEditMode();
  }

  @Output() deleteEvent = new EventEmitter<BudgetItemDto>();
  deleteSelf(value: BudgetItemDto) {
    this.deleteEvent.emit(value);
  }

  updateDay(): void {
    if (this.itemForm.value.occurrence == "0") {
      this.occurrenceDisplay = "";
    }
    else if (this.itemForm.value.occurrence == "1") {
      this.occurrenceDisplay = ", on day " + this.item.occurrenceDay.toString();
    }
    else if (this.itemForm.value.occurrence == "2" || this.itemForm.value.occurrence == "3") {
      this.occurrenceDisplay = ", on " + this.weekDays[this.item.occurrenceDay - 1];
    }
    else {
      this.occurrenceDisplay = "ErrOccDisp";
    }

    if (this.itemForm.value.occurrenceDay) {
      this.item.occurrenceDay = this.itemForm.value.occurrenceDay;
    } else {
      //TODO handle error?
    }
  }

  weekdayChange(value: string): void {
    //TODO handle out of range error for range outside weekdays array
    this.itemForm.value.occurrenceDay = this.weekDays.indexOf(value) + 1;
  }

  occurrDropdown(value: number): boolean {
    switch (value) {
      //display nothing if never(0)
      case 0: {
        if (this.itemForm.value.occurrence as unknown as number == 0) {
          return false;
        }
        else return true;
      }
      //if occurrence is monthly(1)
      case 1: {
        if (this.editActive && this.itemForm.value.occurrence as unknown as number == 1) {
          return true;
        }
        else return false;
      }
      //if occurrence is weekly(2) or biweekly
      case 2: {
        if ((this.editActive && this.itemForm.value.occurrence as unknown as number == 2) || (this.editActive && this.itemForm.value.occurrence as unknown as number == 3)) {
          return true;
        }
        else return false;
      }
      default:
        //TODO error
    }
    return this.editActive;
  }
}
