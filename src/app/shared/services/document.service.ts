import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataResponse } from '../interfaces/response';
import { Document } from '../classes/document';
import { HttpParams } from '@angular/common/http';

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
    const params = new HttpParams();
		const options = {
			params,
			reportProgress: true,
		};
    let formData: FormData = new FormData();
    formData.append("campaign_client_id", document.campaign_client_id.toString());
    formData.append("file", document.file)
    return this.http.post(`campaign-clients-documents`, formData, options).pipe(map(
      response => response as DataResponse<Document>
    ))
  }
}
