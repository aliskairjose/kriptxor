import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { ResultReponse, DataResponse } from '../interfaces/response';
import { map } from 'rxjs/operators';
import {Note} from '../interfaces/note'

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpService) { }

  getNotes(){
    return 'hello-world';
  }
}
