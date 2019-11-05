import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  accommodationDropdown = false;
  selectedLink: string = '';

  accommodations = [
    [ 
      "one",
      "two",
      "three",
      "four"
    ],
    [
      "one",
      "two",
      "three",
      "helo"
    ], 
    [
      "one",
      "two",
      "three",
      "hk"
    ],
    [
      "one",
      "two",
      "three",
      "iylusdgh"
    ]
  ]

  showAccommodationDropDown(){
    this.accommodationDropdown = !this.accommodationDropdown;
  }

  showLinks(event:any){
    this.selectedLink = event.target.value;
  }

  flightsDropdown = false;

  showFlightsDropdown(){
    this.flightsDropdown = !this.flightsDropdown;
  }

  tourismdropDown = false;

  showTourismDropdown(){
    this.tourismdropDown = !this.tourismdropDown;
  }

  visaDropdown = false;

  showVisaDropdown(){
    this.visaDropdown = !this.visaDropdown;
  }


}
