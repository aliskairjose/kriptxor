export interface Seller {
  id?: number;
  nombre?: string;
  apellido?: string;
  email?: string;
  id_rol?: number;
  super_admin?: number;
  numero?: string;
  main_image?: string;
}
export class Seller {
  id: number;
  name: string;
  last_name: string;
  email: string;
  role: number;
  root: number;
  phone: string;
  image: string;
}
