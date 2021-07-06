export interface Dashboard {
  clients_count: number;
  campaigns_count: number;
  users_count: number
  sales_count: number;
  pending_count: number;
  failed_count: number;
  clients_by_user: ClientByUser[];
  campaign_messages: CampaignMessage[];
  sales_success: SaleSuccess[];
  states_last: StatesLast[];
}

export interface StatesLast {
  assigned: number;
  contacted: number;
  no_response: number;
  close_sell: number;
  completed: number;
  not_success: number;
}

export interface SaleSuccess {
  id: number;
  nombre: string;
  count: number;
}
export interface CampaignMessage {
  id: number;
  nombre: string;
  cantidad_mensajes: number;
}
export interface ClientByUser {
  id: number;
  nombre_completo: string;
  count: number;
}