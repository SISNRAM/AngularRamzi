import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../services/ticket/ticket.service';
import { StudentService} from '../../../services/student/student.service';
import { Ticket } from '../../../models/ticket';
import { Student } from 'src/models/student';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  public ticketList: Ticket[] = [];
  public studentList: Student[] = [];

  public displayTicketArchived: boolean;

  constructor(public ticketService: TicketService, public studentService: StudentService) {
    this.ticketService.tickets$.subscribe((tickets) => this.ticketList = tickets);
    this.studentService.students$.subscribe((students) => this.studentList = students);
    this.displayTicketArchived = false;
  }

  ngOnInit() {
  }

  ticketHasBeenSelected(hasBeenSelected: boolean) {
    console.log('event received from child:', hasBeenSelected);
  }


 //appel de la fonction delateTicket du service ticket.service.ts
 deleteTicket(ticket: Ticket) {
  this.ticketService.deleteTicket(ticket); 
}

  archiveTicket(ticket: Ticket) {
    this.ticketService.archiveTicket(ticket);
    this.displayTicketArchived = false;
  }

  showArchivedTickets() {
    this.displayTicketArchived = true;
  }

  hideArchivedTickets() {
    this.displayTicketArchived = false;
  }
}
