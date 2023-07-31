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
    this.itemDropDownTarget += this.item.id.toString();
    this.dataToggleAttr = "#" + this.itemDropDownTarget;
    this.occurrences = Object.values(Occurrence).filter(v => typeof v !== 'number');
    //remove this. only for testing. This is done on enterEditMode method.
    this.itemForm.get('occurrence')?.setValue(Occurrence[this.item.occurrence]);
  }

  itemForm = this.formBuilder.group({
    name: '',
    description: '',
    occurrence: '',
    occurrenceDay: '',
    amount: ''
  })

  enterEditMode(): void {
    this.editActive = !this.editActive;
    this.itemForm.get('occurrence')?.setValue(Occurrence[this.item.occurrence]);
  }

  onSubmit(): void {
    this.itemForm.reset();
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
