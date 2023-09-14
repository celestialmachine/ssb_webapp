import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BudgetEventDto } from '../budget-event/budget-event-dto';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DayDisplayServiceService } from '../../../day-display-service.service';

@Component({
  selector: 'tr[app-budget-event]',
  templateUrl: './budget-event.component.html',
  styleUrls: ['./budget-event.component.css']
})
export class BudgetEventComponent implements OnInit {
  @Input() event!: BudgetEventDto;
  constructor(private formBuilder: FormBuilder, public dayDisplay: DayDisplayServiceService) { }

  ngOnInit(): void { }

  //consider separate forms for editing events

  eventForm = new FormGroup({
    id: new FormControl(0),
    itemId: new FormControl(0),
    name: new FormControl(''),
    description: new FormControl(''),
    //is there a form control for date?
    date: new FormControl(''),
    dueDate: new FormControl(''),
    balance: new FormControl(0),
    note: new FormControl('')
  });

}
