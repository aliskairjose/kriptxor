import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/services/common.service';
import { CampaignService } from '../shared/services/campaign.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../shared/classes/client';
import { forkJoin } from 'rxjs';

@Component( {
  selector: 'app-market-rates',
  templateUrl: './market-rates.page.html',
  styleUrls: [ './market-rates.page.scss' ],
} )
export class MarketRatesPage implements OnInit {
  form: FormGroup;
  hasMortgage = false;
  submitted = false;
  client: Client = {};
  clientQuotes: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private common: CommonService,
    private campaignService: CampaignService
  ) { }

  async ngOnInit() {
    const loading = await this.common.presentLoading();
    loading.present();
    this.route.params.subscribe( data => {
      forkJoin( [
        this.campaignService.getCampaignClientById( 116 ),
        this.campaignService.clientQuotes( 116 )
      ] )
        .subscribe( ( [ clientResponse, clientQuotesResponse ] ) => {
          loading.dismiss();
          console.log( clientResponse );
          console.log( clientQuotesResponse )
          this.client = { ...clientResponse.data.cliente };
          this.clientQuotes = [ ...clientQuotesResponse.data ];
        }, () => loading.dismiss() );
    } )
  }

  async calculate() {
    const loading = await this.common.presentLoading();
    loading.present();
    this.campaignService.quoteCalculator( this.form.value ).subscribe( response => {
      loading.dismiss();
    }, () => loading.dismiss() )
  }

  createForm(): void {
    this.form = this.fb.group(
      {
        salary: [],
        campaign_client_id: [],
        mortgage: [],
        apply_mortgage: [],
        loan: [],
        weight: [],
        height: [],
        sex: [],
        month: [],
        day: [],
        year: []
      }
    );
  }


}
