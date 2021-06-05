import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
import { User } from '../../shared/interfaces/user';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatSort } from '@angular/material/sort';

@Component( {
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.css' ]
} )
export class UsersComponent implements OnInit, AfterViewInit {

  users: MatTableDataSource<User>;

  displayedColumns: string[] = [ 'first_name', 'email', 'role_id' ];
  private readonly list = this;

  @ViewChild( MatPaginator, { static: false } ) paginator: MatPaginator;
  @ViewChild( MatSort ) sort: MatSort;

  constructor(
    private _common: CommonService,
    private cdr: ChangeDetectorRef,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.spinner.show();
    this._common.userList().subscribe( ( users: User[] ) => {
      this.users = new MatTableDataSource<User>( users );
      this.users.paginator = this.paginator;
      this.users.sort = this.sort;
      this.spinner.hide();
    } );
  }

}
