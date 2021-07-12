import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { ResultReponse } from '../interfaces/response';
import { Client } from '../classes/client';

@Injectable( {
  providedIn: 'root'
} )
export class ClientService {

  constructor(
    private http: HttpService
  ) { }

  getById( id: number ): Observable<ResultReponse<Client>> {
    return this.http.get( `clientes/${id}` );
  }
}
