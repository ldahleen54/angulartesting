import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroList => {
          this.heroes = heroList;
        });
  }

  addHero(name: string, age: number): void {
    name = name.trim();
    if(!name) { return; }
    this.heroService.addHero({ name, age } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      })
  }

  deleteHero(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe;
  }
  
  ngOnInit(): void {
    this.getHeroes();
  }
}
