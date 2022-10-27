import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalOpenService {

  public modalOpen: boolean = false;
  constructor() { }

  public setModalState():void{
    this.modalOpen = !this.modalOpen;
    console.log(this.modalOpen);
  }
}
