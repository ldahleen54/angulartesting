import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice',age:  24 },
      { id: 12, name: 'Narco', age: 30 },
      { id: 13, name: 'Bombasto', age: 15 },
      { id: 14, name: 'Celeritas', age: 19 },
      { id: 15, name: 'Magneta', age: 45  },
      { id: 16, name: 'RubberMan', age: 30  },
      { id: 17, name: 'Dynama', age: 50 },
      { id: 18, name: 'Dr IQ', age: 62 },
      { id: 19, name: 'Magma', age: 22 },
      { id: 20, name: 'Tornado', age: 16 }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
