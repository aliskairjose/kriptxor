import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { CommonService } from '../shared/services/common.service';
import { CampaignService } from '../shared/services/campaign.service';
import { CampaignClient, CampaignClientHistory, Campaign } from '../shared/interfaces/campaign';
import { Client } from '../shared/classes/client';
import { Page } from '../shared/interfaces/pagination';
import { Location } from '@angular/common';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { EditClientPage } from './edit-client/edit-client.page';
import { ModalController } from '@ionic/angular';

@Component( {
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: [ './client.page.scss' ],
} )
export class ClientPage implements OnInit {

  clientId: number;
  data: CampaignClient = {};
  client: Client = {};
  historical: CampaignClientHistory[] = [];
  pagination: Page = {};
  campaing: Campaign = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private common: CommonService,
    public location: Location,
    private call: CallNumber,
    private campaignService: CampaignService,
    private actionSheetController: ActionSheetController,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.route.params.subscribe( data => {
      this.clientId = data.id;
      this.loadData();
    } );
  }
  async options() {
   const actionSheet = await this.actionSheetController.create({
     header: '¿Que accion deberia realizar?',
     cssClass: 'my-custom-class',
     buttons: [{
       text: 'Editar',
       role: 'edit',
       icon: 'pencil-outline',
       handler: () => {
         this.presentModal()
       }
     }, {
       text: 'Copiar',
       icon: 'document-text-outline',
       handler: () => {
         console.log('Share clicked');
       }
     }, {
       text: 'Cancelar',
       icon: 'close',
       role: 'cancel',
       handler: () => {
       }
     }]
   });
   await actionSheet.present();
 }
 async presentModal() {
   const modal = await this.modalController.create({
     component: EditClientPage,
     cssClass: 'my-custom-class',
     componentProps: {
      'client': this.client,
    }
   });
   return await modal.present();
 }

  async updateInterest( interested: number ): Promise<void> {
    const loading = await this.common.presentLoading();
    loading.present();
    this.campaignService
      .updateCampaignClientInterest( this.clientId, interested )
      .subscribe( () => {
        loading.dismiss();
        const message = 'Se actualizo con exito';
        this.common.presentToast( { message } );
        this.loadData();
      }, () => loading.dismiss() );
  }

  async loadData() {
    const loading = await this.common.presentLoading();
    loading.present();
    this.campaignService.getCampaignClientById( this.clientId ).subscribe( response => {
      loading.dismiss();
      this.client = { ...response.data.cliente };
      this.campaing = { ...response.data.campaign };
      console.log(response);
    }, () => loading.dismiss() )

    this.campaignService.campaignClientHistory( this.clientId ).subscribe( response => {
      this.pagination = { ...response.meta.page };
      this.historical = [ ...response.data ];
    } )

  }


  async nextCall() {
    console.log('method next call');
    console.log(this.campaing);
    console.log(this.campaing.id);
    const loading = await this.common.presentLoading();
    loading.present();
    this.campaignService.callNow( this.campaing.id ).subscribe( response => {
      const data = response.data;
      this.callNumber( data.cliente );
      this.router.navigateByUrl( `client/${data.id}` );
      loading.dismiss();
    }, () => loading.dismiss() );
  }

  callNumber( client: Client ): void {
    this.call.callNumber( client.numero, true );
  }

  backToCampaignClients(){
    this.router.navigateByUrl( `campaigns/campaign/${this.campaing.id}` );
  }//backToCampaignClients

}
