import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemListComponent } from './components/item-list-components/item-list/item-list.component';
import { BudgetItemComponent } from './components/item-list-components/budget-item/budget-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    BudgetItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
