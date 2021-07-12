import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { ResultReponse, DataResponse } from '../interfaces/response';
import { MasterClient } from '../interfaces/client';
import { Campaign, ClientCampaignDetail } from '../interfaces/campaign';
import { map } from 'rxjs/operators';

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

  getClientDetailById( id: number ): Observable<ResultReponse<ClientCampaignDetail>> {
    return this.http.get( `campaignclientdetails / ${id} ` )
  }
  getCampaign( campaign: number, page: number ): Observable<DataResponse<MasterClient[]>> {
    const filter = {
      campaignId: 17,
      order: { field: 'created_at', way: 'ASC' }
    };

    const filtro = JSON.stringify( filter );

    return this.http.get( `campaign-clients?filter=${filtro}&page=${page}&include=cliente,status` );
  }
}
