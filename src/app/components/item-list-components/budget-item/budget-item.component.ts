import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BudgetItemDto, Occurrence } from '../budget-item/budget-item-dto';
import { FormBuilder } from '@angular/forms';

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

  itemForm = this.formBuilder.group({
    id: 0,
    name: '',
    description: '',
    occurrence: 0,
    occurrenceDay: 0,
    amount: 0
  })

  initializeForm() {
    this.itemForm.setValue({
      id: this.item.id,
      name: this.item.name,
      description: this.item.description,
      occurrence: this.item.occurrence,
      occurrenceDay: this.item.occurrenceDay,
      amount: this.item.amount
    })
  }

  toggleEditMode(): void {
    this.editActive = !this.editActive;
    this.itemDropDownTarget = this.itemDropDownTarget ? "" : "item-collapse" + this.item.id?.toString();
    this.itemForm.get('occurrence')?.setValue(this.item.occurrence);
  }

  @Output() updateEvent = new EventEmitter<BudgetItemDto>();
  updateSelf() {
    let value: BudgetItemDto = this.itemForm.value as BudgetItemDto;
    this.updateEvent.emit(value);
    console.log(this.item.description);
    console.log(this.itemForm)
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
