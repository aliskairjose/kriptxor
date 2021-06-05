import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ERROR_FORM } from '../../shared/constants/global-constants';
import { AuthService } from '../../shared/services/auth.service';
import { StorageService } from '../../shared/services/storage.service';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
} )
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  formError = ERROR_FORM;

  constructor(
    private _router: Router,
    private _auth: AuthService,
    private formBuilder: FormBuilder,
    private _storage: StorageService,
  ) {
    this.createForm();
  }

  get f() { return this.loginForm.controls; }

  ngOnInit(): void {
  }

  private createForm(): void {
    this.loginForm = this.formBuilder.group( {
      email: [ '', [ Validators.required, Validators.email ] ],
      password: [ '', [ Validators.required ] ]
    } );
  }

  onSubmit(): void {
    this.submitted = true;
    if ( this.loginForm.valid ) {
      this._auth.login( this.loginForm.value ).subscribe( response => {
        this._storage.setItem( 'kp_token', response.user.token );
        this._storage.setItem( 'kp_user', response.user );
        this._router.navigate( [ 'dashboard' ] );
      } );
    }
  }

}
