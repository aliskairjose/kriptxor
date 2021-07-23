import { Component, OnInit, ViewChild } from '@angular/core';
import { CampaignService } from '../../shared/services/campaign.service';
import { CommonService } from '../../shared/services/common.service';
import { Page } from '../../shared/interfaces/pagination';
import { IonInfiniteScroll } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { MasterClient, Client } from '../../shared/classes/client';
import { ActivatedRoute, Router } from '@angular/router';

@Component( {
  selector: 'app-campaign',
  templateUrl: './campaign.page.html',
  styleUrls: [ './campaign.page.scss' ],
} )
export class CampaignPage implements OnInit {

  clients: MasterClient[] = [];
  pagination: Page;
  idCampaing: number;
  query = '';
  filter = {
    search: '',
    campaignId: 0,
    order: { field: 'created_at', way: 'ASC' }
  };

  @ViewChild( IonInfiniteScroll ) infiniteScroll: IonInfiniteScroll;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private common: CommonService,
    private call: CallNumber,
    private campaignService: CampaignService
  ) { }

  ngOnInit() {
    this.getCampaign( false, '' );
    this.route.params.subscribe( data => this.idCampaing = this.filter.campaignId = data.id );
  }

  async getCampaign( isFirstLoad, event, page = 1 ) {

    const loading = await this.common.presentLoading();
    if ( !isFirstLoad ) { loading.present(); }

    this.campaignService.getCampaign( this.filter, page ).subscribe( response => {
      loading.dismiss();
      this.pagination = { ...response.meta.page };

      if ( this.pagination.lastPage === page ) { this.infiniteScroll.disabled = true; }
      if ( isFirstLoad ) { event.target.complete(); }

      ( this.filter.search ) ? this.clients = [ ...response.data ] : this.clients.push( ...response.data );

      this.clients.push( ...response.data );
    } );
  }

  async callNow() {
    const loading = await this.common.presentLoading();
    loading.present();
    this.campaignService.callNow( this.idCampaing ).subscribe( response => {
      const data = response.data;
      this.callNumber( data.cliente );
      this.router.navigateByUrl( `client/${data.id}` );
      loading.dismiss();
    }, () => loading.dismiss() );
  }

  loadData( event: any ): void {
    this.getCampaign( true, event, this.pagination.currentPage + 1 );
  }

  callNumber( data ): void {
    this.call.callNumber( data.cliente.numero, true )
      .then( res => this.router.navigateByUrl( `/client/${data.id}` ) )
      .catch( err => console.log( 'Error launching dialer', err ) );
  }

  // Busca por nombre de campaña
  find( query: string ): void {
    this.filter.search = query;
    if ( !query ) {
      this.clients = [];
      this.infiniteScroll.disabled = false;
    }
    this.getCampaign( false, '', );
  }
}
