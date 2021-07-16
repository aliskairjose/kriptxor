import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientPageRoutingModule } from './client-routing.module';

import { ClientPage } from './client.page';
import { InfoBarComponent } from '../shared/components/info-bar/info-bar.component';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientPageRoutingModule
  ],
  declarations: [ ClientPage, InfoBarComponent ],
  entryComponents: [ InfoBarComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

} )
export class ClientPageModule { }
