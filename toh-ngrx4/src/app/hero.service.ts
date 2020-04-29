import { Injectable } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { Hero } from './hero';
import { HEROES, extractHeroes } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // needs to be observable because async for server
  getHeroes(): Observable<Hero[]> {
    // of returns a single value for an observer
    return of(extractHeroes(0));
  }
}
