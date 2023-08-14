import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BudgetItemDto, Occurrence } from '../budget-item/budget-item-dto';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DayDisplayServiceService } from '../../../day-display-service.service';

@Component({
  selector: 'app-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.css']
})
export class BudgetItemComponent implements OnInit{
  //attributes used to identify individual dropdown toggle targets
  itemDropDownAttrTarget: string = "item-collapse";
  dataToggleAttr: string = "";

  editActive: boolean = false;
  @Input() item!: BudgetItemDto;

  constructor(private formBuilder: FormBuilder, public dayDisplay: DayDisplayServiceService) { }

  ngOnInit(): void {
    this.itemDropDownAttrTarget += this.item.id?.toString();
    this.dataToggleAttr = "#" + this.itemDropDownAttrTarget;
    this.initializeForm();
  }

  itemForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    description: new FormControl(''),
    occurrence: new FormControl(0),
    occurrenceDay: new FormControl(0),
    occurrenceWeekday: new FormControl(0),
    amount: new FormControl(0),
  });

  initializeForm(): void {
    this.itemForm.patchValue({
      id: this.item.id,
      name: this.item.name,
      description: this.item.description,
      occurrence: this.item.occurrence,
      occurrenceDay: this.item.occurrenceDay,
      occurrenceWeekday: this.dayDisplay.getDisplayDay(this.item.occurrence,
        this.item.occurrenceDay, this.item.occurrenceDay),
      amount: this.item.amount
    })
  }

  toggleEditMode(): void {
    this.editActive = !this.editActive;
    //stops form from collapsing when on edit mode
    this.itemDropDownAttrTarget = this.itemDropDownAttrTarget ? "" : "item-collapse" + this.item.id?.toString();
  }

  @Output() updateEvent = new EventEmitter<BudgetItemDto>();
  updateSelf(): void {
    this.item.name = this.itemForm.value.name as string;
    this.item.description = this.itemForm.value.description as string;
    this.item.occurrence = this.itemForm.value.occurrence as number;
    this.item.occurrenceDay = this.dayDisplay.getDisplayDay(this.itemForm.value.occurrence as number,
      this.itemForm.value.occurrenceDay as number,
      this.itemForm.value.occurrenceWeekday as number);
    this.item.amount = this.itemForm.value.amount as number;
    this.updateEvent.emit(this.item);
    this.toggleEditMode();
  }

  @Output() deleteEvent = new EventEmitter<BudgetItemDto>();
  deleteSelf(value: BudgetItemDto) {
    this.deleteEvent.emit(value);
  }
}
