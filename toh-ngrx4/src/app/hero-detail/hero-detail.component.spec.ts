import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailComponent } from './hero-detail.component';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MessageService } from '../message.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
class MockHeroService extends HeroService {
  constructor(mockHttpClient: HttpClient, mockMessageService: MessageService) {
    super(mockHttpClient, mockMessageService);
  }
}
describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailComponent],
      providers: [
          {
            provide: ActivatedRoute,
            //override one of the values for activated route
            useValue: {
              url: "http://localhost:4200/detail/12"
            }
          },
          // {
          //   provide: HeroService,
          //   useClass: {
          //     MockHeroService
          //   }
          // }
          HttpClient,
          HttpHandler
        ]
    })
    .compileComponents();
    TestBed.inject(ActivatedRoute);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
