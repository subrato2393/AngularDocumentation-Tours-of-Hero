import { Component, Input, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  selectedHero?:Hero;
  constructor(private messageService:MessageService) { }

  ngOnInit(): void {
  }
@Input() heroList?:Hero[]=HEROES;
onButtonClick(hero:Hero){
  //this.isShow=true;
  this.selectedHero=hero;
  this.messageService.add(`HeroeListComponent: Selected hero id=${hero.id}`);
  console.log(this.selectedHero);
}

}
