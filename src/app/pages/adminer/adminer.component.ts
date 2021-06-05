import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
import { User } from '../../shared/interfaces/user';

@Component( {
  selector: 'app-adminer',
  templateUrl: './adminer.component.html',
  styleUrls: [ './adminer.component.css' ]
} )
export class AdminerComponent implements OnInit {

  users: User[] = [];
  private readonly list = this;

  constructor(
    private _common: CommonService
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  private loadUsers(): void {
    this._common.userList().subscribe( ( users: User[] ) => this.list.users = users.filter( item => item.role_id === 1 ) );
  }

}
