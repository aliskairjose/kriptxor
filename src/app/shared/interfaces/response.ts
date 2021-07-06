import { User } from './user';
export interface BaseResponse {
  token: string;
}

export interface LoginReponse {
  status: string;
  token: string;
  user: User;
}