import { Campaign } from './campaign';
export interface Pagination<T> {
  current_page?: number;
  first_page_url?: string;
  from?: number;
  last_page?: number;
  last_page_url?: string;
  next_page_url?: string;
  path?: string;
  per_page?: number;
  prev_page_url?: string;
  to?: number;
  total?: number;
  data?: T[];
}

export interface Meta {
  page?: Page;
}
export interface Page {
  total?: number;
  lastPage?: number;
  perPage?: number;
  currentPage?: number;
}
