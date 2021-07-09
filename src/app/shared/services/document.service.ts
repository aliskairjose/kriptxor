import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class DocumentService {

  constructor(
    private http: HttpService
  ) { }

  list( id: number, page = 1 ): Observable<any> {
    return this.http.get( `campaign-clients-documents/${id}?page=${page}` );
  }
}
