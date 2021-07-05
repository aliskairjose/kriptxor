import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ERROR_FORM, LOGO } from '../shared/constants/constants';
import { AuthService } from '../shared/services/auth.service';
import { CommonService } from '../shared/services/common.service';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: [ './login.page.scss' ],
} )
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  submitted: boolean;
  formError = ERROR_FORM;
  logo = LOGO;
  isPassword = true;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService,
    private common: CommonService,
  ) {
    this.createForm();
  }

  get f() { return this.loginForm.controls; }

  ngOnInit() {
  }

  async onSubmit() {
    this.submitted = true;
    if ( this.loginForm.valid ) {
      const loading = await this.common.presentLoading();
      loading.present();
      this.auth.login( this.loginForm.value ).subscribe( response => {
        loading.dismiss();
        const message = 'Bienvenido'
        this.common.presentToast( { message } );
        this.router.navigate( [ 'dashboard' ] );
      }, () => loading.dismiss() );
    }
  }

  private createForm(): void {
    this.loginForm = this.fb.group( {
      email: [ '', [ Validators.required, Validators.minLength( 6 ), Validators.email ] ],
      password: [ '', [ Validators.required, Validators.minLength( 8 ) ] ]
    } );
  }

}
