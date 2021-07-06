import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../shared/services/dashboard.service';

@Component( {
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: [ './dashboard.page.scss' ],
} )
export class DashboardPage implements OnInit {
  ads = [ 1, 2, 3, 4 ];
  top = [ 1, 2, 3 ];

  constructor(
    private dashboard: DashboardService
  ) { }

  ngOnInit() {
    this.dashboard.dashboard().subscribe( response => {
      console.log( response );
    } );
  }

}
