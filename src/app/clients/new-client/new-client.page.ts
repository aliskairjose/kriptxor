import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ClientService } from '../../shared/services/client.service';
import { Client } from '../../shared/classes/client';
import * as moment from 'moment-timezone';


@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.page.html',
  styleUrls: ['./new-client.page.scss'],
})
export class NewClientPage implements OnInit {
  client: Client = new Client;
  moment: any = moment;
  birth: string;

  constructor(private clientService: ClientService, public alertController: AlertController) { }

  ngOnInit() {
  }

  saveClient(){
    if(this.validators() == true){
      this.createClient();
    }
  }
  createClient(){
    this.clientService.createClient(this.client).subscribe(
      () => {
        this.client = new Client
        this.successRequest("Cliente registrado exitosamente");
      }
    )
  }
  setAge(event: any){
    if(event.target.value != null){
      this.client.fecha_nacimiento = moment(event.target.value).format('YYYY-MM-DD')
    } else{
      this.client.fecha_nacimiento = null;
    }
  }




  //Validators

  validators(){
    if(this.client.nombre != null){
      if(this.client.apellido != null){
        if(this.client.sexo != null){
          if(this.client.identidad != null){
            if(this.client.numero){
              return true;
            } else{
              this.invalidForm("numero")
            }
          } else{
            this.invalidForm("identidad")
          }
        } else{
          this.invalidForm("sexo")
        }
      } else{
        this.invalidForm("apellido")
      }
    } else{
      this.invalidForm("nombre")
    }
    return false;
  }
  async invalidForm(text: string) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error!',
        subHeader: '',
        message: "El campo de <strong>" + text + "</strong> no puede estar vacio",
        buttons: ['OK']
      });

      await alert.present();
    }
    async successRequest(text: string) {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Exito!',
          subHeader: '',
          message: text,
          buttons: ['OK']
        });

        await alert.present();
      }

}
