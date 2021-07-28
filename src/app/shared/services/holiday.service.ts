import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HolidayService {
  constructor(private http: HttpService) {}

  public getHolidays(): Observable<any> {
    return this.http.get('holidays');
  }
}
