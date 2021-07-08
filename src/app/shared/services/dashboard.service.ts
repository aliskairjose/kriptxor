import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { DataResponse } from '../interfaces/response';
import { Dashboard } from '../interfaces/dashboard';

@Injectable( {
  providedIn: 'root'
} )
export class DashboardService {

  constructor(
    private http: HttpService
  ) { }

  dashboard(): Observable<DataResponse<Dashboard>> {
    return this.http.get( `dashboard-app` );
  }
}
