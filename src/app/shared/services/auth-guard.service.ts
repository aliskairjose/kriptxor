import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable( {
  providedIn: "root"
} )
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthService
  ) { }
  canActivate( route: ActivatedRouteSnapshot ): boolean {

    if ( this.auth.isLoggedIn() ) {
      return true;
    }
    // Redirecciona al login
    this.router.navigate( [ '/login' ] );
    return false;

  }
}