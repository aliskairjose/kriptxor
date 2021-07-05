import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable, Subject } from 'rxjs';
import { StorageService } from './storage.service';
import { TOKEN } from '../constants/constants';
import { User } from '../interfaces/user';

@Injectable( {
  providedIn: 'root'
} )
export class AuthService {
  private auth$: Subject<User> = new Subject<User>();

  constructor(
    private storage: StorageService,
    private http: HttpService,
  ) { }

  /**
   * @description Inicio de sesión a la app
   * @param data Objeto { email, password }
   */
  login( data: any ): Observable<any> {
    return this.http.post( 'login', data );
  }

  register( data: any ): Observable<any> {
    return this.http.post( '', data );
  }

  recoverPassword( data ): Observable<any> {
    return this.http.post( '', data );
  }

  isLoggedIn(): boolean {
    return this.storage.get( TOKEN ) ? true : false;
  }

  /**
   * @description Genera el stream de eventos usando next() para crear el evento
   */
  AuthSubject( user: User ): void {
    this.auth$.next( user );
    this.auth$.complete();
  }

  /**
   * @description Creación del observer mediante el método asObserver(), el cual sera consumido por el componente
   * @returns Observable
   */
  authObserver(): Observable<User> {
    return this.auth$.asObservable();
  }


}
