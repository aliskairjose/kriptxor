import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarketRatesPage } from './market-rates.page';

const routes: Routes = [
  {
    path: '',
    component: MarketRatesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketRatesPageRoutingModule {}
