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

    hostelsList = [
       [
          {
            "imageUrl": "assets/photos/tips/accommodations/hotelscombined.png",
            "websiteUrl": "https://www.hotelscombined.com/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/hostelbookers.jpg",
            "websiteUrl": "https://www.hostelbookers.com/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/hostelworld.png",
            "websiteUrl": "https://www.hostelworld.com/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/hostelz.png",
            "websiteUrl": "https://www.hostelz.com/"
          }
       ],
       [
          {
            "imageUrl": "assets/photos/tips/accommodations/hostelsclub.png",
            "websiteUrl": "https://www.hostelsclub.com/en/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/hostellinginternational.jpg",
            "websiteUrl": "https://www.hihostels.com/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/hostelscentral.png",
            "websiteUrl": "https://www.hostelscentral.com/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/hicanada.png",
            "websiteUrl": "https://hihostels.ca/en/destinations/ontario/hi-toronto"
          }
        ],
        [
          {
            "imageUrl": "assets/photos/tips/accommodations/hostels.png",
            "websiteUrl": "http://www.hostels.com/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/hostelgeeks.png",
            "websiteUrl": "https://hostelgeeks.com/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/couchsurfing.png",
            "websiteUrl": "https://www.couchsurfing.com/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/globalfreeloaders.jpg",
            "websiteUrl": "http://globalfreeloaders.com/"
          }
        ],
        [
          {
            "imageUrl": "assets/photos/tips/accommodations/priceline.jpg",
            "websiteUrl": "https://www.priceline.com//"
          }
        ],
     ];

     hotelsList = [
      [
         {
           "imageUrl": "assets/photos/fb_logo.png",
           "websiteUrl": "https://www.booking.com/"
         },
         {
           "imageUrl": "2",
           "websiteUrl": "helOOOOOOO"
         },
         {
           "imageUrl": "1",
           "websiteUrl": "helOOOOOOO"
         },
         {
           "imageUrl": "2",
           "websiteUrl": "helOOOOOOO"
         }
      ],
      [
         {
           "imageUrl": "1",
           "websiteUrl": "helOOOOOOO"
         },
         {
           "imageUrl": "2",
           "websiteUrl": "helOOOOOOO"
         },
         {
           "imageUrl": "1",
           "websiteUrl": "helOOOOOOO"
         },
         {
           "imageUrl": "2",
           "websiteUrl": "helOOOOOOO"
         }
       ],
       [
        {
          "imageUrl": "excuse",
          "websiteUrl": "helOOOOOOO"
        },
       ]
    ];

    airbnbList = [
      [
         {
           "imageUrl": "1",
           "websiteUrl": "helOOOOOOO"
         },
         {
           "imageUrl": "2",
           "websiteUrl": "helOOOOOOO"
         },
         {
           "imageUrl": "1",
           "websiteUrl": "helOOOOOOO"
         },
         {
           "imageUrl": "2",
           "websiteUrl": "helOOOOOOO"
         }
      ],
      [
         {
           "imageUrl": "1",
           "websiteUrl": "helOOOOOOO"
         },
         {
           "imageUrl": "2",
           "websiteUrl": "helOOOOOOO"
         },
         {
           "imageUrl": "1",
           "websiteUrl": "helOOOOOOO"
         },
         {
           "imageUrl": "2",
           "websiteUrl": "helOOOOOOO"
         }
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
