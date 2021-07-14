import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { ResultReponse, DataResponse } from '../interfaces/response';
import { Client, MasterClient } from '../classes/client';

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
  getClients(page: number): Observable<DataResponse<MasterClient[]>>{
    return this.http.get(`campaign-clients?filter={"interested":1,"auth":1,"doesntQuotes":1,"search":"","order":{"field":"created_at","way":"ASC"}}&page=${page}&include=cliente,status`)
  }
}
