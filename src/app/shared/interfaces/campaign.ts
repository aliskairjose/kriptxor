//import {DateAt} from './response';
import {Client} from './cliente';
//import {Seller} from './seller';

export class CampaignClient{
  masterClient: Client;
  status: Status;
  last: Last;
  seller: Seller;
}
export interface Campaign {
  id?: number;
  nombre?: string;
  tipo?: number;
  condicion?: number;
  fecha_inicio?: string;
  cantidad_mensajes?: number;
  texto?: string;
  id_user?: number;
  created_at: string;
  updated_at: string;
  user_create?: string;
  user_update?: string;
  success?: string;
  deleted_at?: string;
  vendedor?: Seller;
  campaign_clientes_count?: number;
  campaign_clientes?: CampaignClient[];
  status_name?: string;
  quotes?: number;
}

export interface Seller {
  id?: number;
  nombre?: string;
  apellido?: string;
  email?: string;
  nombre_completo?: string;
  id_rol?: number;
  numero?: string;
  main_image?: string;
  vendedor_info?: string | null;
}

export interface CampaignClient {
  id?: number;
  id_campaign?: number;
  id_cliente?: number;
  observaciones?: string;
  condicion?: number;
  created_at?: string;
  updated_at?: string;
  twilio_status?: number;
  twilio_observaciones?: string;
  amount?: number;
  id_user?: number;
  interested?: number;
  cliente: CampaignClient | null;
  status: Status | null;
  getlast?: Last | null;
  vendedor?: Seller | null;
}

export interface Last {
  id?: number;
  id_campaign_client?: number;
  id_user?: number;
  observaciones?: string;
  condicion?: number;
  created_at?: string;
  url_file?: string;
}
export interface Status {
  id?: number;
  name?: string;
  description?: string;
  created_at?: string;
}

export interface ClientCampaignDetail {
  id?: number;
  id_campaign?: number;
  id_cliente?: number;
  id_user?: number;
  observaciones?: string;
  condicion?: number;
  created_at?: string;
  updated_at?: string;
  twilio_status?: number;
  twilio_observaciones?: string;
  amount?: number;
  interested?: number;
  cliente?: CampaignClient;
  details: Detail[];
}

export interface Detail {
  id?: number;
  id_campaign_client?: number;
  id_user?: number;
  observaciones?: string;
  condicion?: number;
  created_at?: string;
  url_file?: string | null;
  vendedor?: Seller;
}
