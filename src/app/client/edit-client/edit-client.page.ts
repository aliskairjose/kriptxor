import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../../shared/classes/client';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment-timezone';
import { CommonService } from '../../shared/services/common.service';
import { ClientService } from '../../shared/services/client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.page.html',
  styleUrls: ['./edit-client.page.scss'],
})
export class EditClientPage implements OnInit {
  @Input() client: Client;
  moment: any = moment;
  birth: string;

  constructor(public modalController: ModalController, private common: CommonService, private clientService: ClientService) { }

  ngOnInit() {
    this.birth = moment(this.client.fecha_nacimiento).format('YYYY-MM-DD')
  }
  saveClient(){
    console.log(this.client);
    if(this.validators() == true){
      this.clientService.updateClient(this.client).subscribe(
        () => {
          this.common.presentToast({message: "Cliente actualizado satisfactoriamente", color: 'success', duration: 4000});
          this.closeModal();
        }, err => {
            this.common.presentToast({message: err.error.message, color: 'danger', duration: 4000});
        }
      )
    }
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
  closeModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  invalidForm(camp: string){
    this.common.alert("El campo "+ camp +" no puede estar vacio")
  }
}
