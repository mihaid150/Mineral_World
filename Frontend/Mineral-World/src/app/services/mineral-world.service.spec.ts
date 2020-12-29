import { TestBed } from '@angular/core/testing';

import { MineralWorldService } from './mineral-world.service';

describe('MineralWorldService', () => {
  let service: MineralWorldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MineralWorldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
