import { Component, OnInit} from '@angular/core';
import { SsbApiService } from '../../../ssb-api.service';
import { BudgetEventDto } from '../budget-event/budget-event-dto';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit{

  events: BudgetEventDto[] = [];

  constructor(private api: SsbApiService) { }

  ngOnInit(): void {
    this.getEvents();
    this.api.eventsByItem.subscribe(newEvents => newEvents.forEach(event => this.events.push(event)));
  }

  getEvents(): void {
    this.api.getEvents().subscribe(events => this.events = events);
  }

  updateEvent(value: BudgetEventDto) {
    //this.api.updateEvent(value).subscribe();
  }

  addEvent(value: BudgetEventDto) {
    //this.api.addEvent(value).subscribe(event => this.events.push(event));
  }

  deleteEvent(value: BudgetEventDto) {
    //this.events = this.events.filter(be => be !== value);
    //this.api.deleteEvent(value.eventId).subscribe();
  }
}
