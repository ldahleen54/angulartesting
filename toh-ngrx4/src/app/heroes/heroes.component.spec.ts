import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Hero } from '../hero';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select Glueman', () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    let glueGuy: Hero;
    component.onSelect(new Hero());
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector()).toBe('Glueman');
  });
});
