import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable( {
  providedIn: 'root'
} )
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  post( serviceName: string, data?: any, options?: any ): Observable<any> {
    const url = environment.api + serviceName;
    this.http.post( url, data );
    return this.http.post( url, data, options );
  }

  get( serviceName: string, data?: any ): Observable<any> {
    const url = environment.api + serviceName;
    return this.http.get( url, { params: data } );
  }

  put( serviceName: string, data?: any ): Observable<any> {
    const url = environment.api + serviceName;
    return this.http.put( url, data );
  }

  patch( serviceName: string, data?: any ): Observable<any> {
    const url = environment.api + serviceName;
    return this.http.patch( url, data );
  }

  delete( serviceName: string, data?: any ): Observable<any> {
    const url = environment.api + serviceName;
    return this.http.delete( url, data );
  }
}
