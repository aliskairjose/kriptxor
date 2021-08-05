import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { USER } from 'src/app/shared/constants/constants';
import {
  CalendarService,
  ReminderParams,
} from 'src/app/shared/services/calendar.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { CommonService } from '../../shared/services/common.service';

@Component({
  selector: 'app-reminder-modal',
  templateUrl: './addReminderModal.page.html',
  styleUrls: ['./styles.scss'],
})
export class AddReminderModalComponent implements OnInit {
  public title = '';
  public selectedHour = '';
  public duration = null;
  public date: string;
  public isEditing = false;
  public reminderId: number;

  constructor(
    private modal: ModalController,
    private calendarService: CalendarService,
    private storage: StorageService,
    private common: CommonService
  ) {}

  ngOnInit() {}

  public getHour(date: string): string {
    const newDate = new Date(date);
    return `${this.zeroBased(newDate.getHours())}:${this.zeroBased(
      newDate.getMinutes()
    )}:00`;
  }

  public async saveReminder(): Promise<void> {
    if (!(await this.validateDate())) return;

    console.log('saveReminder: ', this.date);

    this.selectedHour = this.isEditing
      ? this.selectedHour
      : this.getHour(this.selectedHour);

    let data = {
      title: this.title,
      date: `${this.date} ${this.selectedHour}`,
      duration: parseInt(this.duration, 10),
    } as ReminderParams;

    if (!this.isEditing) {
      const userId = ((await this.storage.get(USER)) as any).id;

      data = { ...data, userId };

      this.calendarService.setReminder(data).subscribe(async (response) => {
        await this.common.presentToast({ message: response.message });

        this.close();
      });
    } else {
      this.calendarService
        .updateReminder(this.reminderId, data)
        .subscribe(async (response) => {
          await this.common.presentToast({ message: response.message });

          this.close();
        });
    }
  }

  async close() {
    await this.modal.dismiss();
  }

  private async validateDate(): Promise<boolean> {
    let message = '';
    if (this.title === '') {
      message = 'El título del recordatorio no debe estar vacío';
      this.common.presentToast({ message });
      return false;
    } else if (this.selectedHour === '') {
      message = 'La hora de inicio del recordatorio no debe estar vacía';
      this.common.presentToast({ message });
      return false;
    } else if (this.duration === null) {
      message = 'La duración del recordatorio no debe estar vacío';
      this.common.presentToast({ message });
      return false;
    }

    return true;
  }

  private zeroBased(value: string | number): string {
    return `0${value}`.slice(-2);
  }
}
