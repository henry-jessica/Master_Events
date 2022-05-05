import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() title?:string; 
  @Input() image?:string; 
  @Input() subTitle?:string; 

  constructor() { }

  ngOnInit(): void {
  }

}
