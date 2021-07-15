import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarketRatesPageRoutingModule } from './market-rates-routing.module';

import { MarketRatesPage } from './market-rates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarketRatesPageRoutingModule
  ],
  declarations: [MarketRatesPage]
})
export class MarketRatesPageModule {}
