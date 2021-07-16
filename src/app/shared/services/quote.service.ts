import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from './http.service';
import { MasterClient } from '../classes/client';
import { Response } from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpService) { }



  calculateQuote( data: any ): Observable<any> {
    return this.http.post( `campaign-client-quotes-calculator`, data );
  }

  getQuote( id: number ): Observable<Response<MasterClient>> {
    return this.http.get( `campaign-client-quotes?filter={ ${id},"order":{"field":"created_at","way":"DESC"}}&page=1&include=bank` ).pipe(
      map(
        response => response as Response<MasterClient>
      )
    );
  }
}
