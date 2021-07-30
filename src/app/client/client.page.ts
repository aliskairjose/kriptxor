import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { CommonService } from '../shared/services/common.service';
import { CampaignService } from '../shared/services/campaign.service';
import {
  CampaignClient,
  CampaignClientHistory,
  Campaign,
} from '../shared/interfaces/campaign';
import { Client } from '../shared/classes/client';
import { Page } from '../shared/interfaces/pagination';
import { Location } from '@angular/common';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { EditClientPage } from './edit-client/edit-client.page';
import { ModalController } from '@ionic/angular';
import { DoesNotApplyModalComponent } from './modal/doesNotApplyModal.page';
import { Clipboard } from '@ionic-native/clipboard/ngx';

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
    private clipboard: Clipboard,
    public location: Location,
    private call: CallNumber,
    public actionSheetController: ActionSheetController,
    private campaignService: CampaignService,
    private modal: ModalController,
  ) { }

  ngOnInit() {
    this.route.params.subscribe( ( data ) => {
      this.clientId = data.id;
      this.loadData();
    } );
  }

  async openOptions() {
    const actionSheet = await this.actionSheetController.create( {
      header: '¿Que desea hacer?',
      buttons: [
        {
          text: 'Editar',
          role: 'edit',
          icon: 'pencil-outline',
          handler: () => {
            this.presentModal()
          }
        },
        {
          text: 'Copiar datos',
          icon: 'copy',
          handler: async () => {
            let data: any = {};

            const extraInfo: any = await this.getExtraInfo();
            if ( extraInfo.length ) { data = extraInfo[ 0 ]; };

            const info = `
              Hola interesado, estos son los datos del cliente
              Nombre Completo del cliente: ${this.client.nombre_completo}
              Fecha de Nacimiento: ${this.client.fecha_nacimiento}
              Sexo: ${this.client.sexo}
              Salario: ${data.salary}
              Altura: ${data.height}
              Peso: ${data.weight} ${data.type_weight}
              Numero de seguro: ${this.client.seguro_social}
              Hipoteca: ${data.mortgage}
              Cédula: ${this.client.identidad}
              Empresa o Sector: Jubilado
              Zona donde vive: ${this.client.direccion}
              Nombre de Promotor: 
              Casa Promotora:
              Banco: ${data.bank.name}
              Sucursal:
              Oficial Bancario que lo atender:
              Hora de la cita:
              Fecha de la cita:
              Fecha de Ingreso:
              Monto en mano:
              Teléfono del cliente: ${this.client.numero}
              Correo del cliente: ${this.client.correo}
              Sucursal donde cobro:
              Fecha de Cobro:
              `
            this.clipboard.copy( info ).then( () => this.common.presentToast( { message: 'Datos copiados' } ) );
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel'
        }
      ]
    } );
    await actionSheet.present();
  }

  private async getExtraInfo(): Promise<any> {
    return new Promise( resolve => {
      this.campaignService.clientQuotes( 116 ).subscribe( response => resolve( response.data ) );
    } );
  }

  async options() {
    const actionSheet = await this.actionSheetController.create( {
      header: '¿Que accion deberia realizar?',
      cssClass: 'my-custom-class',
      buttons: [ {
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
          console.log( 'Share clicked' );
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
        }
      } ]
    } );
    await actionSheet.present();
  }

  async presentModal() {
    const modal = await this.modal.create( {
      component: EditClientPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'client': this.client,
      }
    } );
    return await modal.present();
  }

  async updateInterest( type: string, value: number ): Promise<void> {
    const loading = await this.common.presentLoading();
    let data: any = {};
    ( type === 'interest' ) ? data.interest = value : data.unanswered = value;
    loading.present();
    this.campaignService
      .updateCampaignClientInterest( this.clientId, data )
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
    }, () => loading.dismiss() )

    this.campaignService
      .campaignClientHistory( this.clientId )
      .subscribe( ( response ) => {
        this.pagination = { ...response.meta.page };
        this.historical = [ ...response.data ];
      } );

  }

  async nextCall() {
    const loading = await this.common.presentLoading();
    loading.present();
    this.campaignService.callNow( this.campaing.id ).subscribe(
      ( response ) => {
        const data = response.data;
        this.callNumber( data.cliente );
        this.router.navigateByUrl( `client/${data.id}` );
        loading.dismiss();
      },
      () => loading.dismiss()
    );
  }

  callNumber( client: Client ): void {
    this.call.callNumber( client.numero, true );
  }

  backToCampaignClients() {
    this.router.navigateByUrl( `campaigns/campaign/${this.campaing.id}` );
  } //backToCampaignClients

  public async openNotApplyModal() {
    const modal = await this.modal.create( {
      component: DoesNotApplyModalComponent,
      componentProps: {
        clientId: this.clientId,
      },
      cssClass: 'view-reminder-modal',
    } );

    return await modal.present();
  }
}
