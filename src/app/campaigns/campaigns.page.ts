import { Component, OnInit, ViewChild } from '@angular/core';
import { CampaignService } from '../shared/services/campaign.service';
import { StorageService } from '../shared/services/storage.service';
import { User } from '../shared/interfaces/user';
import { USER } from '../shared/constants/constants';
import { CommonService } from '../shared/services/common.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { Campaign } from '../shared/interfaces/campaign';
import { Meta, Page } from '../shared/interfaces/pagination';

@Component( {
  selector: 'app-campaigns',
  templateUrl: './campaigns.page.html',
  styleUrls: [ './campaigns.page.scss' ],
} )
export class CampaignsPage implements OnInit {

  campaigns: Campaign[] = [];
  pagination: Page = {};

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
    const filter = { campaignClientsCount: 1, name: '' };

    this.campaignService.list( user.id, filter, page ).subscribe( response => {
      loading.dismiss();

      if ( this.pagination.lastPage === page ) { this.infiniteScroll.disabled = true; }
      if ( isFirstLoad ) { event.target.complete(); }

      this.pagination = response.meta.page;
      this.campaigns.push( ...response.data.data );

    }, () => loading.dismiss() );
  }

  loadData( event: any ): void {
    this.getCampaigns( true, event, this.pagination.currentPage + 1 );
  }

}
