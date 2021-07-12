import { Component, OnInit, ViewChild } from '@angular/core';
import { CampaignService } from '../../shared/services/campaign.service';
import { CommonService } from '../../shared/services/common.service';
import { Page } from '../../shared/interfaces/pagination';
import { IonInfiniteScroll } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { MasterClient } from '../../shared/classes/client';

@Component( {
  selector: 'app-campaign',
  templateUrl: './campaign.page.html',
  styleUrls: [ './campaign.page.scss' ],
} )
export class CampaignPage implements OnInit {

  clients: MasterClient[] = [];
  pagination: Page;

  @ViewChild( IonInfiniteScroll ) infiniteScroll: IonInfiniteScroll;

  constructor(
    private common: CommonService,
    private call: CallNumber,
    private campaignService: CampaignService
  ) { }

  ngOnInit() {
    this.getCampaign( false, '' );
  }

  async getCampaign( isFirstLoad, event, page = 1 ) {

    const loading = await this.common.presentLoading();
    if ( !isFirstLoad ) { loading.present(); }

    this.campaignService.getCampaign( 17, page ).subscribe( response => {
      loading.dismiss();
      this.pagination = { ...response.meta.page };

      if ( this.pagination.lastPage === page ) { this.infiniteScroll.disabled = true; }
      if ( isFirstLoad ) { event.target.complete(); }

      this.clients = [ ...response.data ];
    } );
  }

  loadData( event: any ): void {
    this.getCampaign( true, event, this.pagination.currentPage + 1 );
  }

  callNumber( number: string ): void {
    this.call.callNumber( number, true )
      .then( res => console.log( 'Launched dialer!', res ) )
      .catch( err => console.log( 'Error launching dialer', err ) );
  }

  // Busca por nombre de campaña
  // find( query: string ): void {
  //   this.filter.name = query;
  //   if ( !query ) {
  //     this.campaigns = [];
  //     this.infiniteScroll.disabled = false;
  //   }
  //   this.getCampaigns( false, '' );
  // }
}
