import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasts: any[] = [];

  show(message: string, options: any = {}) {
    this.toasts.push({ message, ...options });

    setTimeout(() => {
      $('#notification-toast .toast:first-child').remove();
    }, 5000);
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

}
