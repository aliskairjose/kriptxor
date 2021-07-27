import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';
import { CommonService } from './common.service';
import { TOKEN } from '../constants/constants';
@Injectable( {
  providedIn: 'root'
} )
export class InterceptorService {

  constructor(
    private common: CommonService,
    private storage: StorageService,
  ) { }
  intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {

    return from( this.storage.get( TOKEN ) ).pipe(
      switchMap( token => {

        // Importante: modificamos de forma inmutable, haciendo el clonado de la petición
        const headers = this.addToken( request, `${token}` );

        // Pasamos al siguiente interceptor de la cadena la petición modificada
        return next.handle( headers ).pipe(
          catchError( ( result ) => {
            const color = 'danger';
            let message = '';
            switch ( result.status ) {
              case 401:
                if ( result.error.error = 'invalid_credentials' ) {
                  message = 'Credenciales inválidas';
                  this.common.presentToast( { message, color } );
                }
                break;
              default:
                message = result.error.message;
                this.common.presentToast( { message, color } );
                break;
            }

            return throwError( result );
          } )
        );
      } )
    );
  }

  private addToken( request: HttpRequest<any>, token: any ) {
    if ( token ) {
      let clone: HttpRequest<any>;
      clone = request.clone( {
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      } );
      return clone;
    }
  }

}
