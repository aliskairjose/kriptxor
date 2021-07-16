import { Component, OnInit } from '@angular/core';
import { CalendarMode, Step, IEvent } from 'ionic2-calendar/calendar';
import { CalendarService } from '../shared/services/calendar.service';
import { AlertController, ModalController } from '@ionic/angular';
import { Location } from '@angular/common';
import { StorageService } from '../shared/services/storage.service';
import { USER } from '../shared/constants/constants';
import { AddReminderModalComponent } from './modal/addReminderModal.page';
import { RemindersModalsComponent } from './modal/remindersModal.page';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  eventSource: IEvent[] = [];
  selectedDate: string = null;

  calendar = {
    mode: 'week' as CalendarMode,
    step: 15 as Step,
    currentDate: new Date(),
    startingDayWeek: new Date().getDay(),
  };

  constructor(
    private calendarService: CalendarService,
    private location: Location,
    private storage: StorageService,
    private modal: ModalController,
    private alertController: AlertController
  ) {
    this.getEvents();
  }

  ngOnInit() {}

  async initModal() {
    if (this.selectedDate === null) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        subHeader: '',
        message: 'Debe seleccionar una fecha del calendario',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    const modal = await this.modal.create({
      component: AddReminderModalComponent,
      cssClass: 'add-reminder-modal',
      componentProps: {
        date: this.selectedDate,
      },
    });

    modal.onDidDismiss().then(() => {
      this.getEvents();
    });

    return await modal.present();
  }

  async openRemindersModal(reminder) {
    const modal = await this.modal.create({
      component: RemindersModalsComponent,
      cssClass: 'view-reminder-modal',
      componentProps: {
        date: this.parseDate(reminder.startTime),
        startHour: this.parseHour(reminder.startTime),
        endHour: this.parseHour(reminder.endTime),
        reminder: reminder.title,
      },
    });

    return await modal.present();
  }

  public setDate = (selectedDate: Date) => {
    console.log(selectedDate);
    const date = this.parseDate(selectedDate);

    this.selectedDate = date;
    this.initModal();
  };

  public async getEvents() {
    const userId = ((await this.storage.get(USER)) as any).id;

    this.calendarService
      .getEvents({
        userId,
        from: this.parseDate(this.calendar.currentDate),
        to: this.parseDate(this.nextWeek()),
      })
      .subscribe((response) => {
        this.eventSource = response.data.map((event) => {
          const startTime = new Date(event.date);

          const title =
            event.campaign_client.length > 0
              ? `${event.campaign_client[0].cliente.nombre_completo}: ${event.title}`
              : event.title;

          return {
            title,
            startTime,
            endTime: this.getEndTime(startTime, 3),
          } as IEvent;
        });
      });

    console.log(this.eventSource);
  }

  public getEndTime(startTime: Date, duration: number): Date {
    const endTime = new Date();
    endTime.setTime(startTime.getTime() + duration * 60 * 60 * 1000);

    return endTime;
  }

  public prevSlide(): void {
    this.calendar.currentDate = this.prevWeek();
    this.getEvents();
  }

  public nextSlide(): void {
    this.calendar.currentDate = this.nextWeek();
    this.getEvents();
  }

  public prevWeek(): Date {
    const date = new Date();

    date.setDate(this.calendar.currentDate.getDate() - 7);

    return date;
  }

  public nextWeek(): Date {
    const date = new Date();

    date.setDate(this.calendar.currentDate.getDate() + 7);

    return date;
  }

  public goBack(): void {
    this.location.back();
  }

  private parseDate(date: Date): string {
    const parsedDate = date.toLocaleString().split(' ')[0].split('/');
    parsedDate[0] = this.zeroBased(parsedDate[0]);
    parsedDate[1] = this.zeroBased(parsedDate[1]);
    return parsedDate.reverse().join('-');
  }

  private parseHour(date: Date) {
    return `${this.zeroBased(date.getHours())}:${this.zeroBased(
      date.getMinutes()
    )}`;
  }

  private zeroBased(value: string | number): string {
    return `0${value}`.slice(-2);
  }
}
