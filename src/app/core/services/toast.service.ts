import { Injectable } from '@angular/core';
import { Error, ToastData } from '../core.models';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts = [];

  addToast(toastData: ToastData | Error, delay: number = 5000) {
    // console.log('1');
    // if ('message' in toastData) {
    //   console.log('2');
    //   this.toasts.unshift(toastData);
    // }
    // else {
    // console.log(toastData.message);
    this.toasts.unshift({
      title: 'Error',
      message: toastData.message,
      variant: 'danger'
    });
    // }

    this.delayAndRemove(delay);
  }

  // getErrorMessage({ message }: Error): string {
  //   if (message) {
  //     return `You ${message} is wrong`;
  //   }
  // }

  isErrorToast(toast: ToastData) {
    if (toast.variant === 'error') {
      return true;
    }
    return false;
  }

  delayAndRemove(milliseconds: number) {
    setTimeout(() => {
      this.toasts.pop();
    }, milliseconds);
  }

  remove(index?: number) {
    if (index) {
      this.toasts.splice(index, 1);
    } else {
      this.toasts.pop();
    }
  }
}
