import { Injectable } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { Hero } from './hero';
import { HEROES, extractHeroes } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Hero Service: fetched heroes');
    // of returns a single value for an observer
    return of(extractHeroes(0));
  }
}
