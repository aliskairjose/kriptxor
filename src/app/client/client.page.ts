import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../shared/services/common.service';
import { ClientService } from '../shared/services/client.service';
import { Client } from '../shared/classes/client';

@Component( {
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: [ './client.page.scss' ],
} )
export class ClientPage implements OnInit {

  clientId: number;
  client: Client = {};

  constructor(
    private route: ActivatedRoute,
    private common: CommonService,
    private clientService: ClientService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe( data => {
      this.clientId = data.id;
      this.loadData();
    } );
  }

  async loadData() {
    const loading = await this.common.presentLoading();
    loading.present();
    this.clientService.getById( this.clientId ).subscribe( response => {
      loading.dismiss();
      this.client = { ...response.result };

    }, () => loading.dismiss() )

  }

}
