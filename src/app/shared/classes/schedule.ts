import {User} from '../interfaces/user'
export class Schedule {
  id: number;
  title: string;
  observation: string;
  date: string;
  condition: number;
  user_id: number;
  campaign_client_id? : number;
  created_at: string;
  updated_at: string;
  duration: number;
  user?: User;
}
