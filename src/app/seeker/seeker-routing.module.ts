import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeekerPage } from './seeker.page';

const routes: Routes = [
  {
    path: '',
    component: SeekerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeekerPageRoutingModule {}
