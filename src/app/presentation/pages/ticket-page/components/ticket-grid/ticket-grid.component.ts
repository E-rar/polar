import { Component, OnInit } from '@angular/core';
import {TicketService} from '../../../../../business-domain/services/ticket.service';
import { Ticket } from 'src/app/business-domain/interfaces/ticket';

@Component({
  selector: 'app-ticket-grid',
  templateUrl: './ticket-grid.component.html',
  styleUrls: ['./ticket-grid.component.less']
})
export class TicketGridComponent implements OnInit {

  public tickets : Ticket[] = this.ticket.getTickets();
  constructor(public ticket:TicketService) { }

  ngOnInit(): void {
  }

}
