import { Injectable } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { Hero } from './hero';
import { HEROES, extractHeroes } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesAPIUrl = 'api/heroes';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
      private http: HttpClient,
      private messageService: MessageService
    ) { }

  getHeroes(): Observable<Hero[]> {
    // of returns a single value for an observer
    return this.http.get<Hero[]>(this.heroesAPIUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', [])),
      );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesAPIUrl}/${id}`;
    return this.http.get<Hero>(url)
      .pipe(
        tap(_ => this.log(`Fetched hero with id=${id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      )
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesAPIUrl, hero, this.httpOptions)
      .pipe(
        tap((newHero: Hero) => this.log(`added hero with id:${newHero.id}`)),
        catchError(this.handleError<Hero>('addHero'))
      )
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesAPIUrl, hero, this.httpOptions)
      .pipe(
        tap(_ => this.log(`updated hero id=${hero.id}`)),
        catchError(this.handleError<any>('updateHero'))
      );
  }

  deleteHero(hero: Hero): Observable<any> {
    // error prevention if hero is a number hero.id is undefined
    const id = typeof hero === 'number' ? hero: hero.id;
    const url = `${this.heroesAPIUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`deleted hero id: ${id}`)),
        catchError(this.handleError<Hero>('deleteHero'))
      );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result);
    }
  }

}
