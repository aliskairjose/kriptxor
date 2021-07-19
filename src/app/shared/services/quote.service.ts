import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from './http.service';
import { MasterClient } from '../classes/client';
import { Response } from '../interfaces/response';
import { Quote, Bank, RequestSalary } from '../classes/quote';

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
  getQuotes(quote: Quote): Observable<Response<Bank[]>>{
    return this.http.post("campaign-client-quotes-calculator", quote)
  }
  getCalculatedNetSalary(net: FormData): Observable<Response<number>>{
    return this.http.post("calculator-net-salary", net)
  }
  getRequestedSalary(net: FormData): Observable<Response<RequestSalary[]>>{
    return this.http.post("calculator-salary-per-bank", net).pipe(
      map(
        response => response as Response<RequestSalary[]>
      )
    )
  }
  quote(quote: Quote): Observable<Response<Quote>>{
    return this.http.post("campaign-client-quotes", quote)
  }
}
