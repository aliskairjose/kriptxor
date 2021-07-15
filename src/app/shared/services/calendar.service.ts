import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

interface Params {
  userId: number;
  from: string;
  to: string;
  page?: number;
}

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor(private http: HttpService) {}

  public getEvents({ userId, from, to, page = 1 }: Params): Observable<any> {
    const params = `filter={{"date":{"field":"created_at","from":${from},"to":${to}}
    ,"userId":${userId},"order":{"field":"created_at","way":"ASC"}}&page=${page}
    &include=user,campaignClient.cliente`;

    return this.http.get(`reminders?${params}`);
  }
}
