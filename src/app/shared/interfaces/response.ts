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

export interface DashboardResponse extends BaseResponse {
  result: Dashboard
}
