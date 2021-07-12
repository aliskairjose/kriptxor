import { Component, OnInit, ViewChild  } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Schedule } from '../shared/classes/schedule';
import {Page} from '../shared/interfaces/pagination';
import { ScheduleService } from '../shared/services/schedule.service';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  id: number;
  moment: any = moment;
  reminder: Schedule = new Schedule;
  reminders: Schedule[];
  page: Page;
  updatedReminder: boolean = false;
  today: string = new Date().toISOString();
  max: Date = new Date();
  maxDate: string;
  date = new FormControl();
  time = new FormControl();

  constructor(private activateRoute: ActivatedRoute, private scheduleService: ScheduleService,public alertController: AlertController) {
    this.activateRoute.params.subscribe(
      params => this.id = params['id']
    )
    this.max.setFullYear(this.max.getFullYear() + 3);
    this.maxDate = this.max.toISOString()
   }

  ngOnInit() {
    this.getReminders();
  }

  test(event){
    return console.log('hello-world');
  }
  getReminders(page: number = 1){
    this.scheduleService.getReminders(this.id, page).subscribe(
      response => {
        this.reminders = response.data as Schedule[]
        this.page = response.meta.page as Page;
      }
    )
  }
  getReminder(reminder: Schedule){
    this.scheduleService.getReminder(reminder.id).subscribe(
      response =>{
        this.reminder = response.data as Schedule;
      }
    )
  }
  create(){
    //this.reminder.title != null ? this.createReminder() : this.invalidText();
    const test = this.moment(this.reminder.date).format('YYYY-MM-DD');
    console.log(test);
  }
  createReminder(){
    this.scheduleService.createReminder(this.reminder).subscribe(
      response =>{
        this.reminder = new Schedule;
        this.successRequest(response.message);
        this.getReminders();

      }
    )
  }
  update(){
    this.reminder.title != null ? this.updateReminder() : this.invalidText();
  }
  updateReminder(){
    this.scheduleService.updateReminder(this.reminder).subscribe(
      response =>{
        this.reminder = new Schedule;
        this.successRequest(response.message);
        this.getReminders();
      }
    )
  }
  deleteReminder(reminder: Schedule){
    this.scheduleService.deleteReminder(reminder.id).subscribe(
      response =>{
        this.reminder = new Schedule;
        this.successRequest(response.message);
        this.getReminders();
      }
    )
  }





    //Infinite Scroll
    scrollReminders(){
      this.scheduleService.getReminders(this.id, this.page.currentPage + 1).subscribe(
        response => {
          this.reminders = this.reminders.concat(response.data as Schedule[]);
          this.page = response.meta.page as Page;
        }
      )
    }
  loadData(event) {
    setTimeout(() => {
      this.scrollReminders();

      // Emulates a event
      event.target.complete();
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
    if (this.reminders.length == this.page.total) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  // Alerts
  async alert(reminder: Schedule) {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Recordatorio creado por '+reminder.user.nombre+" "+reminder.user.apellido,
    message: '¿Que accion desea realizar?',
    buttons: [
      {
        text: 'Editar',
        cssClass: 'secondary',
        handler: () => {
            this.updatedReminder = true;
            this.getReminder(reminder);
        }
      }, {
        text: 'Eliminar',
        handler: () => {
          this.deleteReminderAlert(reminder);
        }
      }
    ]
  });

  await alert.present();
}
async successRequest(text: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Exito!',
      subHeader: '',
      message: text,
      buttons: ['OK']
    });

    await alert.present();
  }
  async invalidText() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        subHeader: '',
        message: 'El campo de texto no puede estar vacio',
        buttons: ['OK']
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
          handler: () => {
          }
        }, {
          text: 'Eliminar',
          handler: () => {
            this.deleteReminder(reminder);
          }
        }
      ]
    });

    await alert.present();
    }
}
