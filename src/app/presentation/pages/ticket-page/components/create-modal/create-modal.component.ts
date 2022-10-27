import { Component, OnInit } from '@angular/core';
import { ModalOpenService } from 'src/app/business-domain/services/modal-open.service';
import {TicketService} from 'src/app/business-domain/services/ticket.service';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.less'],
})
export class CreateModalComponent implements OnInit {
  constructor(public modal: ModalOpenService, public ticket: TicketService) {}

  ngOnInit(): void {}
}
