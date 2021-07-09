import { Component, OnInit } from '@angular/core';
import {Campaign} from '../shared/interfaces/campaign';
import {MasterClient} from '../shared/interfaces/client'
import {CampaignService} from '../shared/services/campaign.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.page.html',
  styleUrls: ['./campaign.page.scss'],
})
export class CampaignPage implements OnInit {

  clients: MasterClient[];
  campaign: Campaign;

  constructor(private campaignService: CampaignService) { }

  ngOnInit() {
    this.getCampaign()
  }

  getCampaign(page: number = 1){
    this.campaignService.getCampaign(17,page).subscribe(
      response => this.clients = response as MasterClient[]
    )
  }
}
