import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampaignsPageRoutingModule } from './campaigns-routing.module';

import { CampaignsPage } from './campaigns.page';
import { CampaignPage } from './campaign/campaign.page';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampaignsPageRoutingModule
  ],
  declarations: [ CampaignsPage, CampaignPage ]
} )
export class CampaignsPageModule { }
