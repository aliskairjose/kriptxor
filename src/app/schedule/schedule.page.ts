import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Schedule } from '../shared/classes/schedule';
import { Page } from '../shared/interfaces/pagination';
import { ScheduleService } from '../shared/services/schedule.service';
import { DURATIONS } from './durations.json';
import * as moment from 'moment-timezone';
import { StorageService } from '../shared/services/storage.service';
import { User } from '../shared/interfaces/user';
import { USER } from '../shared/constants/constants';
import { CampaignService } from '../shared/services/campaign.service';
import { Client } from '../shared/classes/client';
import { HolidayService } from '../shared/services/holiday.service';
import { CommonService } from '../shared/services/common.service';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: [ './schedule.page.scss' ],
} )
export class SchedulePage implements OnInit {
  @ViewChild( IonInfiniteScroll ) infiniteScroll: IonInfiniteScroll;

  id: number;
  client: Client = {};
  moment: any = moment;
  durations = DURATIONS;
  reminder: Schedule = new Schedule();
  reminders: Schedule[];
  page: Page;
  updatedReminder: boolean = false;
  today: string = new Date().toISOString();
  max: Date = new Date();
  maxDate: string;
  date: any;
  time: any;
  holidays: [] = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private scheduleService: ScheduleService,
    public alertController: AlertController,
    private storage: StorageService,
    private campaignService: CampaignService,
    private holidayService: HolidayService,
    private commom: CommonService
  ) {
    this.activateRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.max.setFullYear(this.max.getFullYear() + 3);
    this.maxDate = this.max.toISOString();
    this.holidayService.getHolidays().subscribe((res) => {
      this.holidays = res.data;
    });
  }

  ngOnInit() {
    this.getReminders();
    this.getCampaignClient();
  }

  getCampaignClient() {
    this.campaignService.getCampaignClientById(this.id).subscribe(
      (response) => {
        this.client = { ...response.data.cliente };
      },
      () => console.error('error get campaign client service')
    );
  } //

  test(event) {
    return console.log('hello-world');
  }
  async getReminders(page: number = 1) {
    const user: User = (await this.storage.get(USER)) as unknown as User;
    this.scheduleService
      .getReminders(this.id, user.id, page)
      .subscribe((response) => {
        this.reminders = response.data as Schedule[];
        this.page = response.meta.page as Page;
        this.activateInfiniteScroll();
      });
  }
  getReminder(reminder: Schedule) {
    this.scheduleService.getReminder(reminder.id).subscribe((response) => {
      this.reminder = response.data as Schedule;
      this.date = moment(this.reminder.date).format('YYYY-MM-DD');
      this.time = moment(this.reminder.date).format('HH:mm');
    });
  }
  async create() {
    if (!(await this.validateDate())) return;

    this.date = this.moment(this.date).format('YYYY-MM-DD');
    this.reminder.date =
      this.date + ' ' + this.moment(this.time).format('HH:mm:ss');
    this.reminder.campaign_client_id = this.id;
    const user: User = (await this.storage.get(USER)) as unknown as User;
    this.reminder.user_id = user.id;
    this.reminder.title != null ? this.createReminder() : this.invalidText();
  }
  createReminder() {
    const data = {
      attributes: this.reminder,
    };
    this.scheduleService.createReminder(data).subscribe((response) => {
      this.reminder = new Schedule();
      this.date = '';
      this.time = '';
      this.successRequest(response.message);
      this.getReminders();
    });
  }
  async update() {
    if (!(await this.validateDate())) return;

    this.date = this.moment(this.date).format('YYYY-MM-DD');
    this.reminder.date =
      this.date + ' ' + this.moment(this.time).format('HH:mm:ss');
    this.reminder.campaign_client_id = this.id;
    const user: User = (await this.storage.get(USER)) as unknown as User;
    this.reminder.user_id = user.id;
    this.reminder.title != null ? this.updateReminder() : this.invalidText();
  }
  updateReminder() {
    this.scheduleService.updateReminder(this.reminder).subscribe((response) => {
      this.reminder = new Schedule();
      this.date = '';
      this.time = '';
      this.updatedReminder = false;
      this.successRequest(response.message);
      this.getReminders();
    });
  }
  deleteReminder(reminder: Schedule) {
    this.scheduleService.deleteReminder(reminder.id).subscribe((response) => {
      this.reminder = new Schedule();
      this.date = '';
      this.time = '';
      this.successRequest(response.message);
      this.getReminders();
    });
  }

  //Infinite Scroll
  async scrollReminders(event: any) {
    const user: User = (await this.storage.get(USER)) as unknown as User;
    this.scheduleService
      .getReminders(this.id, user.id, this.page.currentPage + 1)
      .subscribe((response) => {
        this.reminders = this.reminders.concat(response.data as Schedule[]);
        this.page = response.meta.page as Page;
        // Emulates a event
        event.target.complete();
      });
  }
  loadData(event: any) {
    setTimeout(() => {
      this.scrollReminders(event);

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.reminders.length == this.page.total) {
        event.target.disabled = true;
      }
    }, 500 );
  }

  activateInfiniteScroll() {
    this.infiniteScroll.disabled = false;
  }
  // Alerts
  async alert(reminder: Schedule) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header:
        'Recordatorio creado por ' +
        reminder.user.nombre +
        ' ' +
        reminder.user.apellido,
      message: '¿Que accion desea realizar?',
      buttons: [
        {
          text: 'Editar',
          cssClass: 'secondary',
          handler: () => {
            this.updatedReminder = true;
            this.getReminder(reminder);
          },
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.deleteReminderAlert(reminder);
          },
        },
      ],
    });

    await alert.present();
  }
  async successRequest(text: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Exito!',
      subHeader: '',
      message: text,
      buttons: ['OK'],
    });

    await alert.present();
  }
  async invalidText() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: '',
      message: 'El campo de texto no puede estar vacio',
      buttons: ['OK'],
    });

    await alert.present();
  }
  async deleteReminderAlert(reminder: Schedule) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Estas seguro de borrar esta cita?',
      message: 'Esta accion <strong>no se podra revertir</strong>',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {},
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.deleteReminder(reminder);
          },
        },
      ],
    });

    await alert.present();
  }

  public async validateDate(): Promise<boolean> {
    if (this.isHoliday(this.date)) {
      this.date = undefined;
      await this.commom.presentToast({
        message: 'La fecha seleccionada es un día festivo',
        color: 'danger',
      });
      return false;
    }

    return true;
  }

  public isHoliday(date: string): boolean {
    return this.holidays.some((h: any) =>
      moment(date).isSame(h.date.split('-').reverse().join('-'), 'day')
    );
  }
}
