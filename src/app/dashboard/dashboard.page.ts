import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../shared/services/dashboard.service';
import { Dashboard } from '../shared/interfaces/dashboard';

@Component( {
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: [ './dashboard.page.scss' ],
} )
export class DashboardPage implements OnInit {

  data: Dashboard = {};
  seeMore = true;

  constructor(
    private dashboard: DashboardService
  ) { }

  ngOnInit() {
    this.dashboard.dashboard().subscribe( response => this.data = { ...response.data } );
  }

}
