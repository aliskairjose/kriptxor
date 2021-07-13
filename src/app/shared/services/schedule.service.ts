import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { DataResponse } from '../interfaces/response';
import { map } from 'rxjs/operators';
import {Schedule} from '../classes/schedule'

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpService) { }

  getReminders(campaignClientId: number,userId:number, page: number): Observable<DataResponse<Schedule[]>>{
    return this.http.get(`reminders?filter={"campaignClientId":${campaignClientId},"userId":${userId},"order":{"field":"created_at","way":"DESC"}}&page=${page}&include=user`).pipe(
      map(
        response => response as DataResponse<Schedule[]>
      )
    )
  }
  getReminder(id: number): Observable<DataResponse<Schedule>>{
    return this.http.get(`reminders/${id}`).pipe(map(
      response => response as DataResponse<Schedule>
    ))
  }
  createReminder(reminder: {attributes:Schedule}): Observable<DataResponse<Schedule>>{
    return this.http.post("reminders", reminder).pipe(map(
      response => response as DataResponse<Schedule>
    ))
  }
  updateReminder(reminder: Schedule): Observable<DataResponse<Schedule>>{
    return this.http.put(`reminders/${reminder.id}`, reminder).pipe(map(
      response => response as DataResponse<Schedule>
    ))
  }
  deleteReminder(id: number): Observable<DataResponse<Schedule>>{
    return this.http.delete(`reminders/${id}`).pipe(map(
      response => response as DataResponse<Schedule>
    ))
  }
}
