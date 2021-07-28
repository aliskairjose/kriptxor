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
export interface Response<T> {
  status?: string;
  data: T;
  message?: string;
  result?: T;
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
export interface Message{
  id?: number;
  whatsapp_message?: string;
  created_at?: string;
  updated_at?: string;
}
