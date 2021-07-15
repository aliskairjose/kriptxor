import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { USER } from 'src/app/shared/constants/constants';
import { CalendarService } from 'src/app/shared/services/calendar.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-reminder-modal',
  templateUrl: './addReminderModal.page.html',
  styleUrls: ['./addReminderModal.page.scss'],
})
export class AddReminderModalComponent implements OnInit {
  public title = '';
  public selectedHour = '';
  public duration = null;
  public date: string;

  constructor(
    private modal: ModalController,
    private calendarService: CalendarService,
    private alertController: AlertController,
    private storage: StorageService
  ) {}

  ngOnInit() {}

  public print() {
    console.log('title: ', this.title);
    console.log('hour: ', this.selectedHour);
    console.log('duration: ', this.duration);
    console.log('date: ', this.date);
  }

  public setHour(date: string) {
    const newDate = new Date(date);
    this.selectedHour = `${this.zeroBased(newDate.getHours())}:${this.zeroBased(
      newDate.getMinutes()
    )}:00`;
  }

  public async saveReminder(): Promise<void> {
    if (!(await this.validateDate())) return;

    const userId = ((await this.storage.get(USER)) as any).id;

    const data = {
      attributes: {
        title: this.title,
        date: `${this.date} ${this.selectedHour}`,
        duration: this.duration,
        userId,
      },
    };

    this.calendarService.setReminder(data).subscribe(async (response) => {
      console.log(response);
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Exito!',
        subHeader: '',
        message: response.message,
        buttons: ['OK'],
      });

      await alert.present();

      this.close();
    });
  }

  async close() {
    await this.modal.dismiss();
  }

  private async validateDate(): Promise<boolean> {
    if (this.title === '') {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        subHeader: '',
        message: 'El título del recordatorio no debe estar vacío',
        buttons: ['OK'],
      });

      await alert.present();

      return false;
    } else if (this.selectedHour === '') {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        subHeader: '',
        message: 'La hora de inicio del recordatorio no debe estar vacía',
        buttons: ['OK'],
      });
      await alert.present();

      return false;
    } else if (this.duration === null) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        subHeader: '',
        message: 'La duración del recordatorio no debe estar vacío',
        buttons: ['OK'],
      });

      await alert.present();

      return false;
    }

    return true;
  }

  private zeroBased(value: string | number): string {
    return `0${value}`.slice(-2);
  }
}
