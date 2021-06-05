import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';

@Injectable( {
  providedIn: 'root'
} )
export class AuthService {

  constructor(
    private _router: Router,
    private http: HttpService,
    private _storage: StorageService,
  ) { }

  /**
   * @description Retorna true si el usuario esta autenticado
   * @returns boolean
   */
  isAuthenticated(): boolean {
    const user = localStorage.getItem( 'kp_user' );
    return ( user ) ? true : false;
  }

  /**
   * @description Login de usuario
   * @param data Email y Password
   */
  login( data: any ): Observable<any> {
    return this.http.post( 'users/login/admin', data );
  }

  logout(): void {
    this._storage.clearAll();
    this._router.navigate( [ '' ] );
  }
}
