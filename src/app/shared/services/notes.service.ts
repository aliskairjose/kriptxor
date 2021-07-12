import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { DataResponse, Response, BaseResponse } from '../interfaces/response';
import { map } from 'rxjs/operators';
import {Note} from '../classes/note'

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpService) { }

  getNotes(id: number, page: number): Observable<DataResponse<Note[]>>{
    return  this.http.get(`campaign-client-notes/${id}?filter={"order":{"field":"created_at","way":"DESC"}}&page=${page}&include=user`).pipe(
      map(
        response => response as DataResponse<Note[]>
      )
    );
  }
  getNote(id: number): Observable<Response<Note>>{
    return this.http.get(`campaign-client-note/${id}`).pipe(map(
      response => response as Response<Note>
    ))
  }
  createNote(note: Note): Observable<Response<Note>>{
    return this.http.post("campaign-client-notes", note).pipe(map(
      response => response as Response<Note>
    ))
  }
  updateNote(note: Note): Observable<Response<Note>>{
    return this.http.put(`campaign-client-notes/${note.id}`, note).pipe(map(
      response => response as Response<Note>
    ))
  }
  deleteNote(id: number): Observable<BaseResponse>{
    return this.http.delete(`campaign-client-notes/${id}`).pipe(map(
      response => response as BaseResponse
    ))
  }

}
