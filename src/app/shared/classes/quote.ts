export class Quote {
  salary: number;
  campaign_client_id: number;
  mortgage: number;
  apply_mortgage: any;
  loan: number;
  weight: number;
  height: number;
  sex: string;
  month: number;
  day: number;
  year: number;
  banks: number[];
  type_weight: string;
}
export class Bank{
  bank_id: number;
  bank_name: string;
  bank_factor: number;
  bank_interest_rate: number;
  quotes: BankQuotes[];
  isChecked: boolean;
}
export class RequestSalary{
  bank_id: number;
  bank_name: string;
  salary: string;
}
export class BankQuotes{
  mortgage: boolean;
  amount: string;
  term_in_monts: string;
  terms_in_years: string;
  biweekly_letter: number;
  monthly_letter: number;
  apply_medical_exams: boolean;
}
