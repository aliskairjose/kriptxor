import {User} from '../interfaces/user';
export class Note {
  id: number;
  content: string;
  campaign_client_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  user: User;
}
