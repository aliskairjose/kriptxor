import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { MasterClient } from '../shared/classes/client';
import { ClientService } from '../shared/services/client.service';
import {Page} from '../shared/interfaces/pagination';
import { CommonService } from '../shared/services/common.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.page.html',
  styleUrls: ['./seeker.page.scss'],
})
export class SeekerPage implements OnInit {

  clients: MasterClient[];
  client: string;
  length: number = 0;
  pages: Page;

  constructor(private call: CallNumber, private clientService: ClientService,  private common: CommonService, private socialSharing: SocialSharing) { }

  ngOnInit() {
  }
  callNumber( number: string ): void {
    this.call.callNumber( number, true )
      .then( res => console.log( 'Launched dialer!', res ) )
      .catch( err => console.log( 'Error launching dialer', err ) );
  }
  searchClient(event: any){
    this.client = event.target.value;
    this.clientService.searchClient(event.target.value).subscribe(
      response => {
        this.clients = response.data;
        this.pages = response.meta.page;
        this.length = this.clients.length;
      }
    );
  }
  async whatsapp(number: string){
    const loading = await this.common.presentLoading();
    loading.present();
    this.clientService.sendMessageWhatsapp().subscribe(
      response => {
        this.sendMessageWhatsapp(number, response.data.whatsapp_message)
        loading.dismiss();

      }, () => loading.dismiss()
    )
  }
  async sendMessageWhatsapp(number: string, message: string){
    const loading = await this.common.presentLoading();
    loading.present();
    this.socialSharing.shareViaWhatsAppToReceiver(number, message).then(() => {
      loading.dismiss();
      this.common.presentToast({message: "Mensaje enviado", color: 'success'})
    }).catch(() => {
        this.common.presentToast({message: "Hubo un problema al enviar el mensaje", color: 'danger'});
        loading.dismiss()
    });
  }
  //Infinite Scroll
  scrollClients(event: any){
    this.clientService.searchClient(this.client, this.pages.currentPage + 1).subscribe(
      response => {
        this.clients = this.clients.concat(response.data);
        this.pages = response.meta.page;
        this.length = this.clients.length;
        event.target.complete();
      }
    )
  }
  loadData(event: any){
    setTimeout(() => {
      //console.log('Done');
      this.scrollClients(event)

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      //console.log(this.pages.total);
    if (this.clients.length == this.pages.total) {
      event.target.disabled = true;
    }
    }, 500);

  }

}
