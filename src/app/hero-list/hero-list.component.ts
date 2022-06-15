import { Component, Input, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  selectedHero?:Hero;
  constructor() { }

  ngOnInit(): void {
  }
@Input() heroList?:Hero[]=HEROES;
onButtonClick(hero:Hero){
  //this.isShow=true;
  this.selectedHero=hero;
  console.log(this.selectedHero);
}

}
