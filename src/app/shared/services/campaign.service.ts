import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { ResultReponse } from '../interfaces/response';
import { Campaign } from '../interfaces/campaign';

@Injectable( {
  providedIn: 'root'
} )
export class CampaignService {

  constructor(
    private http: HttpService
  ) { }

  /**
   * @description Lista todas las campañas
   * @returns Listado de campañas
   */
  list(): Observable<ResultReponse<Campaign[]>> {
    return this.http.get( `campaign` );
  }

  getById( id: number ): Observable<ResultReponse<Campaign>> {
    return this.http.get( `campaign/${id}` );
  }

}
