import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  // The behavior subject to track the modal state
  private modalState = new BehaviorSubject<boolean>(false);

  // The observable to listen to the modal state changes
  modalState$ = this.modalState.asObservable();


  constructor() { }


  openModal(): void {
   
    this.modalState.next(true);
  }

  closeModal(): void {
    this.modalState.next(false);
  }

}
