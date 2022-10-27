import { Injectable } from '@angular/core';
import { Ticket } from '../interfaces/ticket';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  tickets: Ticket[] = [];

  public addTicket(newTicket:Ticket) : void {
    this.tickets.push(newTicket);
    console.log(this.tickets);
  }

  public getTickets():Ticket[]{
    console.log(this.tickets);
    return this.tickets;
  }

  constructor() {}
}
