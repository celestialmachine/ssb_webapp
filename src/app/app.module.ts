import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemListComponent } from './components/item-list-components/item-list/item-list.component';
import { BudgetItemComponent } from './components/item-list-components/budget-item/budget-item.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventListComponent } from './components/event-list-components/event-list/event-list.component';
import { BudgetEventComponent } from './components/event-list-components/budget-event/budget-event.component';
import { CalendarComponent } from './components/calendar-components/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    BudgetItemComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    EventListComponent,
    BudgetEventComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
