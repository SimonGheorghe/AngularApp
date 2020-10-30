/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InternServiceService } from './internService.service';

describe('Service: InternService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InternServiceService]
    });
  });

  it('should ...', inject([InternServiceService], (service: InternServiceService) => {
    expect(service).toBeTruthy();
  }));
});
