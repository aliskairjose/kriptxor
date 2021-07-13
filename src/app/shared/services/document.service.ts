import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataResponse } from '../interfaces/response';
import { Document } from '../classes/document';

@Injectable( {
  providedIn: 'root'
} )
export class DocumentService {

  constructor(
    private http: HttpService
  ) { }

  list( id: number, page: number): Observable<DataResponse<Document[]>> {
    return this.http.get( `campaign-clients-documents/${id}?page=${page}` ).pipe(map(
      response => response as DataResponse<Document[]>
    ));
  }
  delete(id: number): Observable<DataResponse<Document>>{
    return this.http.delete(`campaign-clients-documents/${id}`).pipe(map(
      response => response as DataResponse<Document>
    ))
  }
  create(document: Document): Observable<DataResponse<Document>>{
    return this.http.post(`campaign-clients-documents`, document).pipe(map(
      response => response as DataResponse<Document>
    ))
  }
}
