import { TestBed } from '@angular/core/testing';

import { OnLoadProcessService } from './on-load-process.service';

describe('OnLoadProcessService', () => {
  let service: OnLoadProcessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnLoadProcessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
