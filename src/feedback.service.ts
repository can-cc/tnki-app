import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  constructor(private toastController: ToastController) {}

  public async showErrorMessage(errorMessage: string = 'Unknow error'): Promise<void> {
    const toast = await this.toastController.create({
      message: errorMessage,
      duration: 3000,
      showCloseButton: false,
      position: 'top',
      color: 'danger'
    });
    toast.present();
  }
}
