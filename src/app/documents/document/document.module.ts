import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentPageRoutingModule } from './document-routing.module';

import { DocumentPage } from './document.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentPageRoutingModule
  ],
  providers: [ SocialSharing ],
  declarations: [ DocumentPage ]
} )
export class DocumentPageModule { }
