import { Component, OnInit, ViewChild } from '@angular/core';
import { Label, MultiDataSet, Color } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { CommonService } from '../../shared/services/common.service';
import { Currency } from 'src/app/shared/interfaces/currency';
import { Transaction } from '../../shared/interfaces/transaction';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatSort } from '@angular/material/sort';
@Component( {
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
} )
export class DashboardComponent implements OnInit {

  transactions: MatTableDataSource<Transaction>;
  @ViewChild( MatSort ) sort: MatSort;

  doughnutChartLabels: Label[] = [];
  doughnutColors: Color[] = [
    {
      backgroundColor: [
        '#69F0AE',
        '#FF5252',
        '#FFAB40'
      ]
    }
  ];
  doughnutChartData: Array<number> = [];
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartOptions: any = {
    responsive: true,
    cutoutPercentage: 50,
    maintainAspectRatio: true,
    segmentShowStroke: false,
    elements: {
      arc: {
        borderWidth: 0
      }
    },
    legend: {
      display: false,
    }
  };
  currencies: Currency[] = [];

  displayedColumns: string[] = [ 'date', 'user', 'type', 'currency', 'id', 'amount' ];
  @ViewChild( MatPaginator, { static: false } ) paginator: MatPaginator;

  private readonly list = this;

  constructor(
    private _common: CommonService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.loadCurrencies();
    this.loadTransactions();
  }

  private loadCurrencies() {
    this._common.getCurrencies().subscribe( ( currencies: Currency[] ) => {
      this.list.currencies = [ ...currencies ];
      this.currencies.forEach( currency => {
        this.doughnutChartLabels.push( currency.name as string );
        this.doughnutChartData.push( currency.dolar_value as number );
      } );
    } );
  }

  private loadTransactions(): void {
    this.spinner.show();
    this._common.transactions().subscribe( ( data: any ) => {
      this.list.transactions = new MatTableDataSource<Transaction>( data.transactions );
      this.list.transactions.paginator = this.paginator;
      this.list.transactions.sort = this.sort;
      this.spinner.hide();
    } );
  }

}
