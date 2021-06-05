import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Currency } from '../interfaces/currency';
import { map } from 'rxjs/operators';

@Injectable( {
  providedIn: 'root'
} )
export class CommonService {

  constructor(
    private _http: HttpService
  ) { }

  /**
   *
   * @returns Array de currencies
   */
  getCurrencies(): Observable<Array<Currency>> {
    return this._http.get( 'currencies?active=1&cryptoCoin=1' ).pipe( map( res => res.data ) );
  }

  /**
   *
   * @returns Transacciones
   */
  transactions(): Observable<any> {
    return this._http.get( 'transaction' );
  }

  userList(): Observable<any> {
    return this._http.get( 'users' ).pipe( map( res => res.data ) );
  }
}
