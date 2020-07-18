import { TestBed } from '@angular/core/testing';

import { RoommatesService } from './roommates.service';

describe('RoomatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoommatesService = TestBed.get(RoommatesService);
    expect(service).toBeTruthy();
  });
});
