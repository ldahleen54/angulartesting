import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Hero } from '../hero';
import { HeroesComponent } from './heroes.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MessageService } from '../message.service';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHandler } from '@angular/common/http';

class MockedHeroService {
  private heroes = [{ id: 11, name: 'Glueman', age: 11}];
  getHeroes(): Observable<Hero[]> {
    return of(this.heroes);
  }
}
describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let debugElement: DebugElement;
  let heroService: MockedHeroService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      providers: [ MockedHeroService, MessageService, HttpClient, HttpHandler]
    })
    .compileComponents();
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    heroService = TestBed.inject(MockedHeroService);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onSelect should set selected hero to Glueman', async() => {
    component.onSelect({"id": 1, "name": "Glueman", "age": 10 });
    expect(debugElement.nativeElement.querySelector('h2').innerText).toBe('GLUEMAN');
  });
  //technically an integration test
  it('Should retrieve heroes', async() => {
    expect(component.getHeroes()).toBeDefined();
  });
  it('should display heroes', async() => {
    let text = debugElement
      .query(By.css('li.hero'))
      .nativeElement.innerText;
    expect(text).toBeDefined();
  }); 
});

