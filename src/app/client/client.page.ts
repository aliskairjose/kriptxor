import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../shared/services/common.service';
import { CampaignService } from '../shared/services/campaign.service';
import { CampaignClient } from '../shared/interfaces/campaign';
import { Client } from '../shared/classes/client';

@Component( {
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: [ './client.page.scss' ],
} )
export class ClientPage implements OnInit {

  clientId: number;
  data: CampaignClient = {};
  client: Client = {};

  constructor(
    private route: ActivatedRoute,
    private common: CommonService,
    private campaignService: CampaignService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe( data => {
      this.clientId = data.id;
      this.loadData();
    } );
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
      }, () => loading.dismiss() );
  }

  async loadData() {
    const loading = await this.common.presentLoading();
    loading.present();
    this.campaignService.getCampaignClientById( this.clientId ).subscribe( response => {
      loading.dismiss();
      this.client = { ...response.data.cliente };
    }, () => loading.dismiss() )
  }

}
