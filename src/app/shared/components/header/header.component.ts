import { Component, OnInit } from '@angular/core';
import { LOGO } from '../../constants/global-constants';

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
} )
export class HeaderComponent implements OnInit {

  logo = LOGO;

  constructor() { }

  ngOnInit(): void {
  }

}
