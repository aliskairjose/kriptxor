import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { ResultReponse, DataResponse } from '../interfaces/response';
import { Campaign, ClientCampaignDetail, CampaignClient, CampaignClientHistory } from '../interfaces/campaign';
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

  getCampaignClientById( id: number ): Observable<DataResponse<any>> {
    return this.http.get( `campaign-clients/${id}?include=cliente` );
  }

  getCampaign( filter: any, page: number ): Observable<DataResponse<MasterClient[]>> {
    const filtro = JSON.stringify( filter );
    return this.http.get( `campaign-clients?filter=${filtro}&page=${page}&include=cliente,status` );
  }

  updateCampaignClientInterest( id: number, interested: number ): Observable<any> {
    return this.http.put( `campaign-clients/${id}`, { interested } );
  }


  /**
   * @description Muestra el historial del ciente de la campaña
   * @param campaign_client_id 
   * @param page 
   * @returns 
   */
  campaignClientHistory( campaign_client_id: number, page = 1 ): Observable<DataResponse<CampaignClientHistory[]>> {
    const filter = { campaign_client_id, order: { field: 'created_at', way: 'DESC' } };
    const filtro = JSON.stringify( filter );

    return this.http.get( `campaign-clients-histories?filter=${filtro}&page=${page}&include=user` );
  }

  callNow( campaignId: number ): Observable<any> {
    const filter = { campaignId, order: { field: 'created_at', way: 'ASC' } };
    const filtro = JSON.stringify( filter );
    return this.http.get( `campaign-clients-call-now?filter=${filtro}&page=1&include=cliente,status` );
  }

}
