import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { MasterClient } from '../shared/classes/client';
import { ClientService } from '../shared/services/client.service';
import {Page} from '../shared/interfaces/pagination';
import { CommonService } from '../shared/services/common.service';
import { SocialSharing } from '@ionic-native/social-sharing';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {

  clients: MasterClient[];
  length: number;
  pages: Page;
  search: string = "";

  constructor(private call: CallNumber, private clientService: ClientService, private common: CommonService, private socialSharing: SocialSharing) { }

  ngOnInit() {
    this.getClients();
  }
  callNumber( number: string ): void {
    this.call.callNumber( number, true )
      .then( res => console.log( 'Launched dialer!', res ) )
      .catch( err => console.log( 'Error launching dialer', err ) );
  }
  async getClients(page: number = 1){
    const loading = await this.common.presentLoading();
    loading.present();
    this.clientService.getClients(page, this.search).subscribe(
      response => {
        this.clients = response.data;
        this.length = this.clients.length;
        this.pages = response.meta.page;
        loading.dismiss();
      }, () => loading.dismiss()
    )
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
  //Infinity scroll
   scrollClients(page: number, event: any){
    this.clientService.getClients(page, this.search).subscribe(
      response =>{
        this.clients = this.clients.concat(response.data);
        this.length = this.clients.length;
        this.pages = response.meta.page;
        //Finish the load
        event.target.complete();
      }
    )
  }

  loadData(event: any) {
    setTimeout(() => {
      //console.log('Done');
      this.scrollClients(this.pages.currentPage+1, event)

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      //console.log(this.pages.total);
    if (this.clients.length == this.pages.total) {
      event.target.disabled = true;
    }
    }, 500);
  }

  searchClient(event: any){
    this.search = event.target.value;
      this.clientService.getClients(1, event.target.value).subscribe(
        response => {
          this.clients = response.data;
          this.length = this.clients.length;
          this.pages = response.meta.page;
        }
      );


  }

}
