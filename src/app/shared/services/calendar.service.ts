import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

interface GetEventsParams {
  userId: number;
  from: string;
  to: string;
  page?: number;
}

interface SetReminderParams {
  attributes: {
    userId: number;
    title: string;
    date: string;
    duration: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor(private http: HttpService) {}

  public getEvents({
    userId,
    from,
    to,
    page = 1,
  }: GetEventsParams): Observable<any> {
    const params = {
      date: {
        field: 'created_at',
        from,
        to,
      },
      userId,
      order: {
        field: 'created_at',
        way: 'ASC',
      },
    };

    return this.http.get(`reminders?filter=${JSON.stringify(params)}`);
  }

  public setReminder(data: SetReminderParams): Observable<any> {
    return this.http.post('reminders', data);
  }
}
