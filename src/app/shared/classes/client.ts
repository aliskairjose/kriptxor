import { DateAt, Status } from './response';
export class Client {
  id?: number;
  nombre?: string;
  apellido?: string;
  identidad?: string;
  seguro_social?: string;
  social_security_number?: number;
  correo?: string;
  direccion?: string;
  numero?: string;
  type?: string;
  sexo?: string;
  fecha_nacimiento?: string;
  id_user?: number;
  code?: string;
  nombre_completo?: string;
  available?: boolean;
}
export class MasterClient {
  id?: number;
  id_campaign?: number;
  id_cliente?: number;
  observaciones?: string;
  condicion?: string;
  created_at?: DateAt;
  updated_at?: DateAt;
  interested?: number;
  campaign?: any;
  id_user?: number;
  status?: Status;
  cliente?: Client;
}
