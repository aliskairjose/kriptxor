import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

interface GetEventsParams {
  userId: number;
  from: string;
  to: string;
  page?: number;
}

export interface ReminderParams {
  userId?: number;
  title: string;
  date: string;
  duration: number;
}

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor(private http: HttpService) {}

  public getEvents({ userId, from, to }: GetEventsParams): Observable<any> {
    const params = {
      date: {
        field: 'date',
        from,
        to,
      },
      userId,
      order: {
        field: 'date',
        way: 'ASC',
      },
    };

    return this.http.get(
      `reminders?filter=${JSON.stringify(
        params
      )}&include=campaignClient.cliente`
    );
  }

  public getReminder(id: number): Observable<any> {
    return this.http.get(`reminders/${id}`);
  }

  public setReminder(reminder: ReminderParams): Observable<any> {
    const data = {
      attributes: {
        ...reminder,
      },
    };

    return this.http.post('reminders', data);
  }

  public updateReminder(id: number, data: ReminderParams): Observable<any> {
    return this.http.put(`reminders/${id}`, data);
  }

  public deleteReminder(id: number): Observable<any> {
    return this.http.delete(`reminders/${id}`);
  }
}
