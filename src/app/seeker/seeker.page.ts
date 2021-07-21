import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { MasterClient } from '../shared/classes/client';
import { ClientService } from '../shared/services/client.service';

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.page.html',
  styleUrls: ['./seeker.page.scss'],
})
export class SeekerPage implements OnInit {

  clients: MasterClient[];
  length: number = 0;

  constructor(private call: CallNumber, private clientService: ClientService) { }

  ngOnInit() {
  }
  callNumber( number: string ): void {
    this.call.callNumber( number, true )
      .then( res => console.log( 'Launched dialer!', res ) )
      .catch( err => console.log( 'Error launching dialer', err ) );
  }
  searchClient(event: any){
    this.clientService.searchClient(event.target.value).subscribe(
      response => {
        console.log(response);
        this.clients = response.data;
        this.length = this.clients.length;
      }
    );
  }

}
