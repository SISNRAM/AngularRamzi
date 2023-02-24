import { Major, Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Madrid',
    description: '',
    date: dateToday,
    student: {
      id: 1,
      nom: 'l3osfor',
      prenom:'hamid'
    },
    major: Major.IS,
    archived : false
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: {
      id: 2,
      nom: 'lamba',
      prenom:'said'
    },
    major: Major.CS,
    archived : false
  },
];
