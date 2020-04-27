import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  // private person: string;
  constructor(private router: Router) { }
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  ngOnInit(): void {
    this.hero.name = 'test';
  }

}
