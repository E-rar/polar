import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Ticket } from '../interfaces/ticket';
@Injectable({
  providedIn: 'root',
})
export class TicketService {
  tickets: Ticket[] = [];

  constructor(private http: HttpClient) {}

  private TicketsUrl = 'app/data-domain/ticket-data'; // URL to web api

  public addTicket(newTicket: Ticket): void {
    this.tickets.push(newTicket);
    console.log(this.tickets);
  }

  getTickets() {
    return this.http.get<Ticket[]>(this.TicketsUrl).pipe(
      map((data) => data),
      catchError(this.handleError)
    ); 
  }

  // getTicket(id: number): Observable<Ticket> {
  //   return this.getTickets().pipe(
  //     map((Tickets) => Tickets.find((ticket) => ticket.id === id))
  //   );
  // }

  save(ticket: Ticket) {
    if (ticket.id) {
      return this.put(ticket);
    }
    return this.post(ticket);
  }

  delete(ticket: Ticket) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.TicketsUrl}/${ticket.id}`;

    return this.http.delete<Ticket>(url).pipe(catchError(this.handleError));
  }

  // Add new ticket
  private post(ticket: Ticket) {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    return this.http
      .post<Ticket>(this.TicketsUrl, ticket)
      .pipe(catchError(this.handleError));
  }

  // Update existing Ticket
  private put(ticket: Ticket) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.TicketsUrl}/${ticket.id}`;

    return this.http.put<Ticket>(url, ticket).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
