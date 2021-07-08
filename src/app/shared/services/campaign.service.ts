import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { ResultReponse } from '../interfaces/response';
import { Campaign, ClientCampaignDetail } from '../interfaces/campaign';

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
  list( sellerId: number, filter: any, page = 1 ): Observable<ResultReponse<Campaign[]>> {
    console.log( filter );
    return this.http.get( `campaigns?sellers=${sellerId}&filter={"campaignClientsCount":${filter.campaignClientsCount},"name":""}&page=${page}` );
  }

  getById( id: number ): Observable<ResultReponse<Campaign>> {
    return this.http.get( `campaign / ${id} ` );
  }

  getClientDetailById( id: number ): Observable<ResultReponse<ClientCampaignDetail>> {
    return this.http.get( `campaignclientdetails / ${id} ` )
  }
}
