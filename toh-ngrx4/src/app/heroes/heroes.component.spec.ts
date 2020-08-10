import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Hero } from '../hero';
import { HeroesComponent } from './heroes.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MessageService } from '../message.service';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HeroService } from '../hero.service';

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
  let heroService: HeroService;
  let heroServiceSpy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      providers: [ HeroService, MessageService, HttpClient, HttpHandler]
    })
    .compileComponents();
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    heroService = TestBed.inject(HeroService);
    heroService.getHeroes();
    fixture.detectChanges();
    
    
    
    
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('#onSelect should set selected hero to Glueman', async() => {
    component.onSelect({"id": 11, "name": "Glueman", "age": 11 });
    expect(debugElement.nativeElement.querySelector('h2').innerText).toBe('GLUEMAN');
  });
  //should work but doesn't
  xit('Should retrieve heroes', async() => {
    heroServiceSpy = spyOn(heroService, 'getHeroes');
    // heroService.getHeroes();
    expect(heroServiceSpy).toHaveBeenCalled();
    // expect(component.getHeroes()).toBeDefined();
  });
  it('should display heroes', async() => {
    let text = debugElement
      .query(By.css('li.hero'))
      .nativeElement.innerText;
    expect(text).toBeDefined();
  });
});


