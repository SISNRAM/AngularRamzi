import { Student } from "./student";

export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: Student;
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