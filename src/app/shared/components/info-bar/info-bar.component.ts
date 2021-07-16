import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../classes/client';

@Component( {
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: [ './info-bar.component.scss' ],
} )
export class InfoBarComponent implements OnInit {

  @Input() client: Client;
  @Input() id: number;

  constructor() { }

  ngOnInit() { }

}
