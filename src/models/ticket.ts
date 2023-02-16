export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: string;
  major?: Major;
  archived?: boolean;
}

export enum Major {
  CS = 'CS',
  IT = 'IT',
  IS = 'IS',
  SE = 'SE',
  CE = 'CE',
}