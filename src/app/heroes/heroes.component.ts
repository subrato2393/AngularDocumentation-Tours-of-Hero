import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

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

   heroes:Hero[]=HEROES;
   selectedHero?:Hero;
   isShow:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(hero:Hero){
    this.isShow=true;
    this.selectedHero=hero;
    console.log(this.selectedHero);
  }
}
