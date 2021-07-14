import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { MasterClient } from '../shared/classes/client';
import { ClientService } from '../shared/services/client.service';
import {Page} from '../shared/interfaces/pagination';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {

  clients: MasterClient[];
  pages: Page;

  constructor(private call: CallNumber, private clientService: ClientService) { }

  ngOnInit() {
    this.getClients();
  }
  callNumber( number: string ): void {
    this.call.callNumber( number, true )
      .then( res => console.log( 'Launched dialer!', res ) )
      .catch( err => console.log( 'Error launching dialer', err ) );
  }
  getClients(page: number = 1){
    this.clientService.getClients(page).subscribe(
      response => {
        this.clients = response.data;
        console.log(this.clients);
        this.pages = response.meta.page;
      }
    )
  }

  //Infinity scroll
  scrollClients(page: number){
    this.clientService.getClients(page).subscribe(
      response =>{
        this.clients = this.clients.concat(response.data);
        this.pages = response.meta.page;
      }
    )
  }

  loadData(event: any) {
    setTimeout(() => {
      //console.log('Done');
      this.scrollClients(this.pages.currentPage+1)

      //Finish the load
      event.target.complete();
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      //console.log(this.pages.total);
    if (this.clients.length == this.pages.total) {
      event.target.disabled = true;
    }
    }, 500);
  }

}
