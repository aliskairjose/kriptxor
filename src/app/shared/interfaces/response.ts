import { User } from './user';
import { Meta } from './pagination';
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

export interface DataResponse<T> extends BaseResponse {
  data: T;
  meta?: Meta;
}

export interface ResultReponse<T> extends BaseResponse {
  result: T
}
export interface DateAt {
  date?: string;
  timezone_type?: number;
  timezone?: string;
}
export interface Status {
  id?: number;
  name?: string;
  decription?: string;
  created_at?: string;
}
