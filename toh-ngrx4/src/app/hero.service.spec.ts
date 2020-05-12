import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpEvent } from '@angular/common/http';
import { Hero } from './hero';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getHero',
   inject(
     [HttpTestingController, HeroService],
     ( httpMock: HttpTestingController) => {
      let hero: Hero;
      service.getHero(12).subscribe((data) => {
        hero = data;
      });
      // might not actually be a working url 
      const mockReq = httpMock.expectOne('api/heroes/12');
      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      httpMock.verify();
    })

  );

  // should services just be tested normally if they are retrieving data from a server
  // it('should get correct heroes', () => {

  // });
});
