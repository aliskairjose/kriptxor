import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { DashboardResponse } from '../interfaces/response';

@Injectable( {
  providedIn: 'root'
} )
export class DashboardService {

  constructor(
    private http: HttpService
  ) { }

  dashboard(): Observable<DashboardResponse> {
    return this.http.get( `dashboard` );
  }
}
