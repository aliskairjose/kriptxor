import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import {MasterClient} from '../interfaces/client';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor(private http: HttpService) { }

  getCampaign(campaign: number, page: number): Observable<MasterClient[]>{
    return this.http.get(`campaign-clients?filter={"campaignId":${campaign},"order":{"field":"created_at","way":"ASC"}}&page=${page}&include=cliente,status`).pipe(
      map(
        response => response.data as MasterClient[]
      )
    )
  }
}
