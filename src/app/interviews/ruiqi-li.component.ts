import { Component, OnInit } from '@angular/core';

@Component({
  //this is the tag name which will be used in different component files
  selector: 'app-ruiqi-li',
  templateUrl: './ruiqi-li.component.html',
  styleUrls: ['./ruiqi-li.component.css']
  //also include here if the component is using any services
})
export class RuiqiLiComponent implements OnInit {
//what the component does to support the view, that logic goes here
  constructor() { }

  //lifecycle hooks like created, mounted
  ngOnInit() {
   
  }

}
