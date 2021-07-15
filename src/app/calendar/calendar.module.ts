import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCalendarModule } from 'ionic2-calendar';
import { IonicModule } from '@ionic/angular';

import { CalendarPageRoutingModule } from './calendar-routing.module';

import { CalendarPage } from './calendar.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CalendarPageRoutingModule,
    NgCalendarModule,
  ],
  declarations: [CalendarPage],
})
export class CalendarPageModule {}
