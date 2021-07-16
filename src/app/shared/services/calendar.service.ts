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
      }
    };

    return this.http.get(
      `reminders?filter=${JSON.stringify(
        params
      )}&include=user,campaignClient.cliente`
    );
  }

  public setReminder(data: SetReminderParams): Observable<any> {
    return this.http.post('reminders', data);
  }
}
