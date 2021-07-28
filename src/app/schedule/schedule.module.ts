import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulePageRoutingModule } from './schedule-routing.module';

import { SchedulePage } from './schedule.page';
import { InfoBarComponent } from '../shared/components/info-bar/info-bar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulePageRoutingModule,
    SharedModule
  ],
  providers: [ InfoBarComponent ],
  declarations: [ SchedulePage ],
  entryComponents: [ InfoBarComponent ]
} )
export class SchedulePageModule { }
