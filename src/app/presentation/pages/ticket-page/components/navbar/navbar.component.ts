import { Component, OnInit } from '@angular/core';
import {ModalOpenService} from '../../../../../business-domain/services/modal-open.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  constructor(public modal:ModalOpenService) {}

  ngOnInit(): void {
  }

}
