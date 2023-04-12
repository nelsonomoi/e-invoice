import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast-messages',
  templateUrl: './toast-messages.component.html',
  styleUrls: ['./toast-messages.component.css']
})
export class ToastMessagesComponent implements OnInit{

  toasts: any

  constructor(
    private toast: ToastService
  ){}


  ngOnInit(): void {

    this.toasts = this.toast.toasts

  }


  toastClose(){
    $('#notification-toast .toast:first-child').remove();
  }

}
