import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignsPage } from './campaigns.page';
import { CampaignPage } from './campaign/campaign.page';

const routes: Routes = [
  {
    path: '',
    component: CampaignsPage
  },
  {
    path: 'campaign/:id',
    component: CampaignPage
  }
];

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ],
} )
export class CampaignsPageRoutingModule { }
