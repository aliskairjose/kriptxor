import { User } from './user';
import { Dashboard } from './dashboard';
import { Pagination, Meta } from './pagination';
export interface BaseResponse {
  status: string;
  message: string;
}
export interface LoginReponse {
  status: string;
  token: string;
  user: User;
}

export interface DataResponse<T> extends BaseResponse {
  data: T;
  meta?: Meta;
}

export interface ResultReponse<T> extends BaseResponse {
  result: T
}

