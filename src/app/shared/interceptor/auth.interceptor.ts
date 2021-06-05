import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private _storage: StorageService,
  ) { }

  intercept( request: HttpRequest<unknown>, next: HttpHandler ): Observable<HttpEvent<unknown>> {

    // this.spinner.show();
    const token = this._storage.getItem( 'kp_token' );
    if ( token ) {
      request = request.clone( { headers: request.headers.set( 'Authorization', `Bearer ${token}` ) } );
    }

    if ( !request.headers.has( 'Content-Type' ) ) {
      request = request.clone( { headers: request.headers.set( 'Content-Type', 'application/json' ) } );
    }

    request = request.clone( { headers: request.headers.set( 'Accept', 'application/json' ) } );

    return next.handle( request ).pipe( map( ( event: HttpEvent<any> ) => {
      if ( event instanceof HttpResponse ) {
        // this.spinner.hide();
      }
      return event;
    } ),
      catchError( ( response: HttpErrorResponse ) => {
        this.spinner.hide();

        // this.toastrService.error( response?.error?.message || response?.error?.message[ 0 ] || response?.statusText );
        switch ( response.status ) {
          case 401:
            this.router.navigate( [ 'login' ] );
            break;
          case 404:
            // this.router.navigate( [ 'home' ] );
            break;
          case 500:
            // Manejor de error
            break;
          default:
            break;
        }

        return throwError( response );
      } )
    );
  }
}
