import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../shared/services/dashboard.service';
import { Dashboard } from '../shared/interfaces/dashboard';
import { CommonService } from '../shared/services/common.service';

@Component( {
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: [ './dashboard.page.scss' ],
} )
export class DashboardPage implements OnInit {

  data: Dashboard = {};
  seeMore = true;

  constructor(
    private common: CommonService,
    private dashboard: DashboardService
  ) { }

  async ngOnInit() {
    const loading = await this.common.presentLoading();
    loading.present();
    this.dashboard.dashboard().subscribe( response => {
      loading.dismiss();
      this.data = { ...response.data };
    }, () => loading.dismiss() );

    this.initPush();
  }


  initPush(){
    console.log('Init Push');
  }

}
