import { Campaign } from './campaign';
export interface Meta {
  page?: Page;
}
export interface Page {
  total?: number;
  lastPage?: number;
  perPage?: number;
  currentPage?: number;
}
