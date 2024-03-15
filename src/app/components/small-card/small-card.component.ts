import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  imagemSmall:string = ""
  @Input()
  titleSmall:string = ""
  @Input()
  linkSmall:string = ""
  @Input()
  spanSmall:string = ""
  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

}
