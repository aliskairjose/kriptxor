import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { ResultReponse, DataResponse } from '../interfaces/response';
import { Campaign, ClientCampaignDetail, CampaignClient } from '../interfaces/campaign';
import { map } from 'rxjs/operators';
import { MasterClient } from '../classes/client';

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
  list( sellerId: number, filter: any, page = 1 ): Observable<DataResponse<Campaign[]>> {
    const filtro = JSON.stringify( filter );
    return this.http.get( `campaigns?sellers=${sellerId}&filter=${filtro}&page=${page}` );
  }

  detail( id: number, filter: any, page = 1 ): Observable<DataResponse<any[]>> {
    return this.http.get( `campaign-clients?filter${filter}&&page=${page}&include=cliente,status` )
  }

  getById( id: number ): Observable<ResultReponse<Campaign>> {
    return this.http.get( `campaign / ${id} ` );
  }

  getCampaignClientById( id: number ): Observable<DataResponse<CampaignClient>> {
    return this.http.get( `campaign-clients/${id}?include=cliente` );
  }

  getCampaign( filter: any, page: number ): Observable<DataResponse<MasterClient[]>> {
    const filtro = JSON.stringify( filter );
    return this.http.get( `campaign-clients?filter=${filtro}&page=${page}&include=cliente,status` );
  }

  updateCampaignClientInterest( id: number, interested: number ): Observable<any> {
    return this.http.put( `campaign-clients/${id}`, { interested } );
  }
}
