import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

   hero:Hero={
        id:1,
        name:'windstrome',
   };

   heroes:Hero[]=[];
   selectedHero?:Hero;
   isShow:boolean=false;
  constructor(private heroService:HeroService){ }

  ngOnInit(): void {
    this.getHeroes();
    this.getMessages();
  }
  getHeroes():void{
    this.heroService.getHero().subscribe(heroes=> this.heroes=heroes)
  }
  getMessages():void{
    this.heroService.getMessages().subscribe(heroes=> this.heroes=heroes)
  }
  
  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //       .subscribe(heroes => this.heroes = heroes);
  // }
}
