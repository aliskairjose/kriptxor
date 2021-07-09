import {DateAt, Status} from './response';
import {MasterClient} from './client';
import {Seller} from './seller';

export class Campaign {
  id: number;
  name: string;
  type: number;
  condition: number;
  start_date: string;
  messages: number;
  text: string;
  id_user: number;
  success: string;
  created_at: DateAt;
  updated_at: DateAt;
  campaign_clients_count: number;
  campaign_clients_auth_count: number;
  status_name: string;
  quotes: number;
  user_create: string;
  user_update: string;
  deleted_at: string;
  campaigns_clients: CampaignClient[]
}
export class CampaignClient{
  masterClient: MasterClient;
  status: Status;
  last: Last;
  seller: Seller;
}
export class Last{
  id: number;
  id_campaign_client: number;
  id_user: number;
  observation: string;
  condition: string;
  created_at: string;
  url_file: string;
}
