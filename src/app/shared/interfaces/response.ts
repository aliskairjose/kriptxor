import { User } from './user';
import { Dashboard } from './dashboard';
export interface BaseResponse {
  status: string;
  message: string;
}
export interface LoginReponse {
  status: string;
  token: string;
  user: User;
}
export interface Reponse {
  status: string;
  data: string;
  message: string;
}

export interface DashboardResponse extends BaseResponse {
  data: Dashboard
}
export class DateAt{
  date: string;
  timezone_type: number;
  timezone: string;
}
export class Status{
  id: number;
  name: string;
  decription: string;
  created_at: string;
}
