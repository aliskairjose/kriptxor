import { Component, OnInit, ViewChild } from '@angular/core';
import { CampaignService } from '../shared/services/campaign.service';
import { StorageService } from '../shared/services/storage.service';
import { User } from '../shared/interfaces/user';
import { USER } from '../shared/constants/constants';
import { CommonService } from '../shared/services/common.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { Campaign } from '../shared/interfaces/campaign';
import { Page } from '../shared/interfaces/pagination';

@Component( {
  selector: 'app-campaigns',
  templateUrl: './campaigns.page.html',
  styleUrls: [ './campaigns.page.scss' ],

} )
export class CampaignsPage implements OnInit {

  campaigns: Campaign[] = [];
  pagination: Page = {};
  filter = { campaignClientsCount: 1, name: '', quotesCount: 1, condition: 1 };

  @ViewChild( IonInfiniteScroll ) infiniteScroll: IonInfiniteScroll;

  constructor(
    private common: CommonService,
    private storage: StorageService,
    private campaignService: CampaignService
  ) { }

  ngOnInit() {
    this.getCampaigns( false, '' );
  }

  private async getCampaigns( isFirstLoad, event, page = 1 ) {

    const loading = await this.common.presentLoading();
    if ( !isFirstLoad ) { loading.present(); }

    const user: User = await this.storage.get( USER ) as unknown as User;

    this.campaignService.list( user.id, this.filter, page ).subscribe( response => {
      loading.dismiss();
      this.pagination = response.meta.page;

      if ( this.pagination.lastPage === page ) { this.infiniteScroll.disabled = true; }
      if ( isFirstLoad ) { event.target.complete(); }

      ( this.filter.name ) ? this.campaigns = [ ...response.data ] : this.campaigns.push( ...response.data );

    }, () => loading.dismiss() );
  }

  loadData( event: any ): void {
    this.getCampaigns( true, event, this.pagination.currentPage + 1 );
  }

  // Busca por nombre de campaña
  find( query: string ): void {
    this.filter.name = query;
    if ( !query ) {
      this.campaigns = [];
      this.infiniteScroll.disabled = false;
    }
    this.getCampaigns( false, '' );
  }

}
