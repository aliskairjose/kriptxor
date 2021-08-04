import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarService } from '../../shared/services/calendar.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { AddReminderModalComponent } from './addReminderModal.page';

@Component({
  selector: 'app-reminder-modal',
  templateUrl: './remindersModal.page.html',
  styleUrls: ['./styles.scss'],
})
export class RemindersModalsComponent implements OnInit {
  public title = '';
  public date: '';
  public startHour: '';
  public endHour: '';
  public reminderId: number;

  constructor(
    private modalStacked: ModalController,
    private calendarService: CalendarService,
    private common: CommonService
  ) {}

  ngOnInit() {}

  public editReminderModal() {
    this.calendarService.getReminder(this.reminderId).subscribe(async (res) => {
      const modal = await this.modalStacked.create({
        component: AddReminderModalComponent,
        cssClass: 'add-reminder-modal',
        componentProps: {
          date: this.date,
          isEditing: true,
          reminderId: this.reminderId,
          title: res.data.title,
          duration: res.data.duration,
          selectedHour: res.data.date.split(' ')[1],
        },
      });

      modal.onDidDismiss().then(() => {
        this.close();
      });

      return await modal.present();
    });
  }

  public deleteReminder() {
    this.calendarService
      .deleteReminder(this.reminderId)
      .subscribe(async (res) => {
        await this.common.presentToast({ message: 'Recordatorio eliminado' });
        this.close();
      });
  }

  async close() {
    await this.modalStacked.dismiss();
  }
}
