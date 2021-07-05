import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ERROR_FORM } from '../shared/constants/constants';
import { AuthService } from '../shared/services/auth.service';
import { CommonService } from '../shared/services/common.service';

@Component( {
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: [ './login.page.scss' ],
} )
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  submitted: boolean;
  formError = ERROR_FORM;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private common: CommonService,
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  async onSubmit() {
    this.submitted = true;
    if ( this.loginForm.valid ) {
      const loading = await this.common.presentLoading();
      loading.present();
      this.auth.login( this.loginForm.value ).subscribe( response => {
        loading.dismiss();

      }, () => loading.dismiss() );
    }
  }

  private createForm(): void {
    this.loginForm = this.fb.group( {
      email: [ '', [ Validators.required, Validators.minLength( 6 ) ] ],
      password: [ '', [ Validators.required, Validators.minLength( 8 ) ] ]
    } );
  }

}
