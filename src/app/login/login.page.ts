import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ERROR_FORM, LOGO, TOKEN, USER } from '../shared/constants/constants';
import { AuthService } from '../shared/services/auth.service';
import { CommonService } from '../shared/services/common.service';
import { Router } from '@angular/router';
import { StorageService } from '../shared/services/storage.service';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';

@Component( {
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: [ './login.page.scss' ],
} )
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  submitted: boolean;
  tokenFcm : string;
  formError = ERROR_FORM;
  logo = LOGO;
  isPassword = true;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService,
    private common: CommonService,
    private storage: StorageService,
  ) {
    this.createForm();
  }

  get f() { return this.loginForm.controls; }

  async ngOnInit() {

    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    PushNotifications.addListener('registration',
        (token: Token) => {
          this.tokenFcm = token.value;
        }
    );
  }

  async onSubmit() {
    this.submitted = true;
    if ( this.loginForm.valid ) {

      let data = {
        password : this.loginForm.value.password,
        email : this.loginForm.value.email,
        token : this.tokenFcm
      };
      
      const loading = await this.common.presentLoading();
      loading.present();
      this.auth.login( data ).subscribe( async ( response ) => {
        loading.dismiss();
        const message = 'Bienvenido'
        this.common.presentToast( { message } );
        await this.storage.store( TOKEN, response.token );
        await this.storage.store( USER, response.user );
        this.router.navigate( [ 'dashboard' ] );
      }, () => loading.dismiss() );
    }
  }

  private createForm(): void {
    this.loginForm = this.fb.group( {
      email: [ '', [ Validators.required, Validators.minLength( 6 ), Validators.email ] ],
      password: [ '', [ Validators.required, Validators.minLength( 6 ) ] ]
    } );
  }

}
