import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-market-rates',
  templateUrl: './market-rates.page.html',
  styleUrls: [ './market-rates.page.scss' ],
} )
export class MarketRatesPage implements OnInit {

  hasMortgage = false;

  constructor() { }

  ngOnInit() {
  }

}
