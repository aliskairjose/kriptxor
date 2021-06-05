import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
import { Transaction } from '../../shared/interfaces/transaction';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatSort } from '@angular/material/sort';

@Component( {
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: [ './transaction.component.css' ]
} )
export class TransactionComponent implements OnInit {

  table_content: {
    date: string,
    noTransaction: string,
    img_src:
    string, user: string,
    category: string,
    currency: string,
    transaction: string,
    quantity: string
  }[] = [
      {
        date: 'Mier, 09 dic. 2020',
        noTransaction: '34999738',
        img_src: 'assets/img/avatar.png',
        user: 'Maria Jose Zuñiga',
        category: '--',
        currency: 'USD',
        transaction: '--',
        quantity: '$ 1.055'
      },
      {
        date: 'Mier, 09 dic. 2020',
        noTransaction: '34999738',
        img_src: 'assets/img/avatar.png',
        user: 'Maria Jose Zuñiga',
        category: '--',
        currency: 'USD',
        transaction: '--',
        quantity: '$ 1.055'
      },
      {
        date: 'Mier, 09 dic. 2020',
        noTransaction: '34999738',
        img_src: 'assets/img/avatar.png',
        user: 'Maria Jose Zuñiga',
        category: '--',
        currency: 'USD',
        transaction: '--',
        quantity: '$ 1.055'
      },
      {
        date: 'Mier, 09 dic. 2020',
        noTransaction: '34999738',
        img_src: 'assets/img/avatar.png',
        user: 'Maria Jose Zuñiga',
        category: '--',
        currency: 'USD',
        transaction: '--',
        quantity: '$ 1.055'
      },
      {
        date: 'Mier, 09 dic. 2020',
        noTransaction: '34999738',
        img_src: 'assets/img/avatar.png',
        user: 'Maria Jose Zuñiga',
        category: '--',
        currency: 'USD',
        transaction: '--',
        quantity: '$ 1.055'
      },
      {
        date: 'Mier, 09 dic. 2020',
        noTransaction: '34999738',
        img_src: 'assets/img/avatar.png',
        user: 'Maria Jose Zuñiga',
        category: '--',
        currency: 'USD',
        transaction: '--',
        quantity: '$ 1.055'
      },
      {
        date: 'Mier, 09 dic. 2020',
        noTransaction: '34999738',
        img_src: 'assets/img/avatar.png',
        user: 'Maria Jose Zuñiga',
        category: '--',
        currency: 'USD',
        transaction: '--',
        quantity: '$ 1.055'
      },
      {
        date: 'Mier, 09 dic. 2020',
        noTransaction: '34999738',
        img_src: 'assets/img/avatar.png',
        user: 'Maria Jose Zuñiga',
        category: '--',
        currency: 'USD',
        transaction: '--',
        quantity: '$ 1.055'
      },

    ];

  public trades: MatTableDataSource<any[]>;
  tradeColumns: string[] = [ 'created_at', 'user', 'id', 'destination', 'symbol', 'cantidad', 'state' ];

  public buys: MatTableDataSource<any[]>;
  buyColumns: string[] = [ 'created_at', 'user', 'id', 'symbol', 'cantidad', 'state' ];

  public discharges: MatTableDataSource<any[]>;
  public deposits: any[] = [];

  public readonly list = this;
  @ViewChild( MatSort ) sort: MatSort;

  @ViewChild( MatPaginator, { static: false } ) paginator: MatPaginator;

  constructor(
    private _common: CommonService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.loadTransactions();
  }

  private loadTransactions(): void {
    this.spinner.show();
    this._common.transactions().subscribe( ( data: any ) => {
      const transactions: Transaction[] = [ ...data.transactions ];
      const trades = transactions.filter( item => item.type === 'trade' ); // Intercambio
      this.list.trades = new MatTableDataSource<any>( trades );
      this.list.trades.paginator = this.paginator;
      this.list.trades.sort = this.sort;

      const buys = transactions.filter( item => item.type === 'buy' ); // Compra
      this.list.buys = new MatTableDataSource<any>( buys );
      this.list.buys.paginator = this.paginator;
      this.list.buys.sort = this.sort;

      const discharge = transactions.filter( item => item.type === 'discharge' );
      this.list.discharges = new MatTableDataSource<any>( discharge );
      this.list.discharges.paginator = this.paginator;
      this.list.discharges.sort = this.sort;

      this.list.deposits = transactions.filter( item => item.type === 'deposit' );
      this.spinner.hide();
    } );
  }

}
