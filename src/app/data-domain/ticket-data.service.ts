export class TicketDataService {
  createDb() {
    const tickets = [{ id: 0, header: 'Mr. Nice', footer: 'bong' }];
    return { tickets };
  }
}
