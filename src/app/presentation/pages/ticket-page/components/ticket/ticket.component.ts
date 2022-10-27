import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.less']
})
export class TicketComponent implements OnInit {
  @Input()
  public header : string = '';
  @Input()
  public footer: string = '';

  constructor() { }

  ngOnInit(): void {
  }


}
