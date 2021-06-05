export interface User {

  id?: number;
  address?: string;
  admin?: number;
  avatar?: string;
  birthday_date?: string;
  card_brand?: string;
  card_last_four?: number;
  country_id?: number;
  created_at?: string;
  ebits?: number;
  email?: string;
  email_confirmation?: number;
  first_name?: string;
  last_name?: string;
  level?: string;
  options?: string;
  passport_num?: string;
  phone?: string;
  postal_code?: string;
  purchases?: number;
  purchases_percent?: number;
  referral_code?: string;
  register?: number;
  remember_token?: string;
  reset_token?: string;
  role_id?: number;
  sponsor_code?: string;
  stripe_id?: number;
  token?: string;
  trial_ends_at?: string;
  two_factor_active?: number;
  updated_at?: string;
}
