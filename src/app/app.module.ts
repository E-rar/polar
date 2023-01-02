import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketPageComponent } from './presentation/pages/ticket-page/ticket-page.component';
import {TicketComponent} from './presentation/pages/ticket-page/components/ticket/ticket.component';
import { TicketGridComponent } from './presentation/pages/ticket-page/components/ticket-grid/ticket-grid.component';
import { NavbarComponent } from './presentation/pages/ticket-page/components/navbar/navbar.component';
import { CreateModalComponent } from './presentation/pages/ticket-page/components/create-modal/create-modal.component'
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    TicketPageComponent,
    TicketComponent,
    TicketGridComponent,
    NavbarComponent,
    CreateModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
