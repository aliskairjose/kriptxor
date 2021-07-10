import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { DataResponse } from '../interfaces/response';
import { Document } from '../interfaces/document';

@Injectable( {
  providedIn: 'root'
} )
export class DocumentService {

  constructor(
    private http: HttpService
  ) { }

  list( id: number, page = 1 ): Observable<DataResponse<Document[]>> {
    return this.http.get( `campaign-clients-documents/${id}?page=${page}` );
  }
}
