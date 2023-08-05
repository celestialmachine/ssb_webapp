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

  @Input() item!: BudgetItemDto;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.itemDropDownTarget += this.item.id?.toString();
    this.dataToggleAttr = "#" + this.itemDropDownTarget;
    this.occurrences = Object.values(Occurrence).filter(v => typeof v !== 'number');
    this.initializeForm();
  }

  itemForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    description: new FormControl(''),
    occurrence: new FormControl(''),
    occurrenceDay: new FormControl(0),
    amount: new FormControl(0),
  });


  initializeForm() {
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
    //stops form from collapsing when on edit mode
    this.itemDropDownTarget = this.itemDropDownTarget ? "" : "item-collapse" + this.item.id?.toString();
  }

  @Output() updateEvent = new EventEmitter<BudgetItemDto>();
  updateSelf() {
    this.item.name = this.itemForm.value.name as string;
    this.item.description = this.itemForm.value.description as string;
    this.item.occurrence = parseInt(this.itemForm.value.occurrence as string);
    this.item.occurrenceDay = this.itemForm.value.occurrenceDay as number;
    this.item.amount = this.itemForm.value.amount as number;
    console.log(this.item.occurrence);
    console.log(this.item);
    this.updateEvent.emit(this.item);
    this.toggleEditMode();
  }

  @Output() deleteEvent = new EventEmitter<BudgetItemDto>();
  deleteSelf(value: BudgetItemDto) {
    this.deleteEvent.emit(value);
  }

  OccurenceDay(occurrence: number, day: number): string {
    switch(occurrence) {

    }
    return "";
  }
}
