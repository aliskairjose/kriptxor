import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampaignPageRoutingModule } from './campaign-routing.module';

import { CampaignPage } from './campaign.page';
import { CommonModule } from '@angular/common';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampaignPageRoutingModule
  ],
  declarations: [ CampaignPage ],
} )
export class CampaignPageModule { }
