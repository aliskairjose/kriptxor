import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/services/common.service';
import { CampaignService } from '../shared/services/campaign.service';
import { ActivatedRoute } from '@angular/router';
import { Client, MasterClient } from '../shared/classes/client';
import { Quote, Bank, RequestSalary } from '../shared/classes/quote';
import { QuoteService } from '../shared/services/quote.service';
import * as moment from 'moment-timezone';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component( {
  selector: 'app-market-rates',
  templateUrl: './market-rates.page.html',
  styleUrls: [ './market-rates.page.scss' ],
} )
export class MarketRatesPage implements OnInit {

  id: number;
  moment: any = moment;
  client: Client = {};
  age: number;
  clientQuotes: Quote[] = [];
  lastedQuote: Quote;
  quote: Quote = new Quote;
  birth: string;
  banks: Bank[] = [];
  RequestedBanks: RequestSalary[];
  showBanksRequested: boolean = false;

  constructor(
    private activateRoute: ActivatedRoute,
    private common: CommonService,
    private campaignService: CampaignService,
    private quoteService: QuoteService,
    public alertController: AlertController,
    private router: Router,
    private socialSharing: SocialSharing
  ) {
    this.activateRoute.params.subscribe(
      params => {
        this.id = params[ 'id' ];
      }
    )
  }

  ngOnInit() {
    this.getClient();
    this.getClientQuotes();
  }

  async calculate() {
  }

  share( url: string ): void {
    const options = {
      message: `Documento de ${this.client.nombre_completo}`,
      subject: `Documento de ${this.client.nombre_completo}`,
      files: [ url ],
      chooserTitle: 'Selecciona una app'
    }
    this.socialSharing.shareWithOptions( options );
  }

  async getClient() {
    const loading = await this.common.presentLoading();
    loading.present();
    this.campaignService.getCampaignClientById( this.id ).subscribe(
      response => {
        let master = response.data as MasterClient;
        this.client = master.cliente as Client;
        this.quote.campaign_client_id = master.id;
        this.calculateAge();
        this.setSex();
        loading.dismiss();
      }, () => loading.dismiss()
    )
  }

  getClientQuotes() {
    this.campaignService.clientQuotes( this.id ).subscribe(
      response => {
        this.clientQuotes = response.data;
        this.lastedQuote = this.clientQuotes[0];
        this.setData();
      }
    )
  }

  getQuotes() {
    this.quoteService.getQuotes( this.quote ).subscribe(
      response => {
        this.banks = response.data;
        if(this.banks.length <= 0){
          this.common.presentToast({message: 'No hay cotizaciones disponibles para esos parámetros.', color: 'warning'})
        } else {
          this.quote.banks = [];
        }
      }
    )
  }

  selectBankQuote() {
    this.quote.banks = [];
    this.banks.forEach( key => {
      key as Bank;
      if ( key.isChecked == true ) {
        this.quote.banks.push( key.bank_id )
      }
    } )
  }
  quoteClient() {
    this.quoteService.quote( this.quote ).subscribe(
      response => {
        this.common.presentToast( { message: response.message, color: 'success' } )
        this.router.navigate( [ '/client', this.id ] )
      } )
  }
  calculateRequestedSalary( event: any ) {
    if ( event.target.value != null && event.target.value != "" ) {
      this.requestedSalary( event.target.value )
    } else {
      this.quote.salary = null;
      this.showBanksRequested = false;
    }
  }

  requestedSalary( amount: string ) {
    let formData: FormData = new FormData;
    formData.append( "requested_amount", amount );
    formData.append( "birthday_year", this.quote.year.toString() );
    this.quoteService.getRequestedSalary( formData ).subscribe(
      response => {
        this.RequestedBanks = response.data as RequestSalary[];
        if(this.RequestedBanks.length > 0){
          this.showBanksRequested = true;
        } else{
          this.common.presentToast({message: 'No hay bancos disponibles para este cliente', color: 'warning'})
        }
      }
    )
  }

  calculateNetSalary( event: any ) {
    if ( event.target.value != null && event.target.value != "" ) {
      let formData: FormData = new FormData;
      formData.append( "net_salary", event.target.value )
      this.quoteService.getCalculatedNetSalary( formData ).subscribe(
        response => {
          this.quote.salary = response.data;
        }
      )
    } else {
      this.quote.salary = null;
    }
  }

  //Validators
  finishQuote() {
    if(this.banks.length > 0){
      if(this.quote.banks.length > 0){
        if ( this.client.fecha_nacimiento != null && this.birth != null ) {
          if ( this.quote.salary != null ) {
            this.validMortgage();
            this.validHeightWeight();
            this.validLoan();
            this.quoteClient();
          } else {
            this.invalidForm( "Salario" )
          }

        } else {
          this.invalidForm( "Fecha de nacimiento" )
        }
      } else{
        this.common.presentToast({message: 'Debe seleccionar al menos un banco', color: 'warning'})
      }
    } else {
      this.common.presentToast({message: 'No hay cotizaciones disponibles para registrar', color: 'warning'})
    }

  }

  setAge( event: any ) {
    let birth = moment( event.target.value ).format( 'YYYY-MM-DD' );
    let today = moment();
    let age = today.diff( birth, "years" );
    this.age = age;
    this.quote.day = +moment( birth ).format( 'DD' );
    this.quote.month = +moment( birth ).format( 'MM' );
    this.quote.year = +moment( birth ).format( 'YYYY' );
    this.client.fecha_nacimiento = birth;
  }


  setSex() {
    if ( this.client.sexo != null ) {
      this.quote.sex = this.client.sexo
    }
  }
  setData(){
    this.setSalary();
    this.setWeight();
    this.setHeight();
  }
  setSalary(){
    if(this.lastedQuote != null){
      if(this.lastedQuote.salary != null){
        this.quote.salary = this.lastedQuote.salary;
      } else{
        this.lastedQuote.salary = null;
      }
    }
  }
  setWeight() {
    if ( this.lastedQuote != null ) {
      if ( this.lastedQuote.weight != null ) {
        this.quote.type_weight = this.lastedQuote.type_weight;
        this.quote.weight = this.lastedQuote.weight;
      } else {
        this.quote.weight = null
        this.quote.type_weight = "Kgs";
      }
    } else {
      this.quote.weight = null
      this.quote.type_weight = "Kgs";
    }
  }
  setHeight() {
    if ( this.lastedQuote != null ) {
      if ( this.lastedQuote.height ) {
        this.quote.height = this.lastedQuote.height;
      } else {
        this.quote.height = null

      }
    }
  }

  calculateAge() {
    if ( this.client.fecha_nacimiento != null ) {
      let birth = moment( this.client.fecha_nacimiento ).format( 'YYYY-MM-DD' );
      let today = moment();
      let age = today.diff( birth, "years" );
      this.age = age;
      this.birth = birth;
      this.quote.day = +moment( birth ).format( 'DD' );
      this.quote.month = +moment( birth ).format( 'MM' );
      this.quote.year = +moment( birth ).format( 'YYYY' );
    }

  }


  validQuote() {
    if ( this.client.fecha_nacimiento != null && this.birth != null ) {
      if ( this.quote.sex != null ) {
        if ( this.quote.salary != null ) {
          if(this.quote.weight != null) {
            if(this.quote.type_weight != null){
              if(this.quote.height != null){
                this.client.sexo = this.quote.sex;
                this.validMortgage();
                this.validHeightWeight();
                this.validLoan();
                this.getQuotes();
                //console.log(this.quote);
              } else{
                this.invalidForm("Altura")
              }
            } else{
              this.invalidForm("Tipo de unidad de peso")
            }
          } else{
            this.invalidForm("Peso")
          }
        } else {
          this.invalidForm( "Salario" )
        }
      } else {
        this.invalidForm( "Sexo" )
      }
    } else {
      this.invalidForm( "Fecha de nacimiento" )
    }

  }

  validMortgage() {
    if ( this.quote.apply_mortgage != null ) {
      if ( this.quote.apply_mortgage == true ) {
        this.quote.apply_mortgage = 1;
      } else {
        this.quote.apply_mortgage = 0;
        this.quote.mortgage = 0;
      }
    } else {
      this.quote.apply_mortgage = 0;
      this.quote.mortgage = 0;
    }
  }

  validHeightWeight() {
    if ( this.quote.height == null ) {
      this.quote.height = 0;
    }
    if ( this.quote.weight == null ) {
      this.quote.weight = 0;
    }
  }

  validLoan() {
    if ( this.quote.loan == null ) {
      this.quote.loan = 0;
    }
  }

  // Alerts
  successRequest( message: string ) {
    this.common.presentToast( { message } );
  }

  invalidForm( text: string ) {
    const message = `El campo de ${text} no puede estar vacio`;
    const color = 'warning';
    this.common.presentToast( { message, color } )
  }
}
