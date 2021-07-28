import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarketRatesPageRoutingModule } from './market-rates-routing.module';

import { MarketRatesPage } from './market-rates.page';
import { InfoBarComponent } from '../shared/components/info-bar/info-bar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarketRatesPageRoutingModule,
    SharedModule
  ],
  providers: [ InfoBarComponent ],
  declarations: [ MarketRatesPage ]
} )
export class MarketRatesPageModule { }
