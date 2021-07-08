import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../shared/services/campaign.service';
import { StorageService } from '../shared/services/storage.service';
import { User } from '../shared/interfaces/user';
import { USER } from '../shared/constants/constants';

@Component( {
  selector: 'app-campaigns',
  templateUrl: './campaigns.page.html',
  styleUrls: [ './campaigns.page.scss' ],
} )
export class CampaignsPage implements OnInit {
  campaigns = [ 1, 2, 3 ];

  constructor(
    private storage: StorageService,
    private campaignService: CampaignService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  private async loadData() {
    const user: User = await this.storage.get( USER ) as unknown as User;
    const filter = { campaignClientsCount: 1, name: '' };
    this.campaignService.list( user.id, filter ).subscribe( response => {
      console.log( response );
    } );
  }

}
