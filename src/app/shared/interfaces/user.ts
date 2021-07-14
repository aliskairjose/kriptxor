export interface User {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  id_rol: number;
  super_admin: number;
  numero: string;
  main_image: string;
  top_seller?: number;
}
