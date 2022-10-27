import { TestBed } from '@angular/core/testing';

import { ModalOpenService } from './modal-open.service';

describe('ModalOpenService', () => {
  let service: ModalOpenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalOpenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
