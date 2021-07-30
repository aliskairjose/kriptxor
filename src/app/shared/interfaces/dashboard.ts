export interface Dashboard {
  allCampaigns?: number;
  clients?: number;
  lastNews?: LastNews[]
  topSellers?: TopSellers[]
  reminders?: number;
  projections?: number;
}

export interface TopSellers {
  id?: number;
  nombre?: string;
  apellido?: string;
  email?: string;
  id_rol?: number;
  super_admin?: number;
  numero?: string;
  main_image?: string;
}

export interface LastNews {
  seeMore: boolean;
  id?: number;
  title?: string;
  content?: string;
  image?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;

}