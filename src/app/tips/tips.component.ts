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

  showAccommodation = false;
  showFlight = false;
  showTourism = false;
  showVisa = false;

  showList(id:any){
    if (id == 0){
        this.showAccommodation = true;
        this.showFlight = false;
        this.showTourism = false;
        this.showVisa = false;
    }
    else if (id == 1){ 
        this.showAccommodation = false;
        this.showFlight = true;
        this.showTourism = false;
        this.showVisa = false;
    }
    else if (id == 2){
        this.showAccommodation = false;
        this.showFlight = false;
        this.showTourism = true;
        this.showVisa = false;
    }
    else if (id == 3){
        this.showAccommodation = false;
        this.showFlight = false;
        this.showTourism = false;
        this.showVisa = true;
    }
  } 


  accommodationList = [
       [
          {
            "imageUrl": "assets/photos/tips/accommodations/hostelscombined.png",
            "websiteUrl": "https://www.hotelscombined.com/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/hostelbookers.jpg",
            "websiteUrl": "https://www.hostelbookers.com/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/hostelworld1.png",
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
            "imageUrl": "assets/photos/tips/accommodations/hicanada1.png",
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
            "imageUrl": "assets/photos/tips/accommodations/hostelscombined.png",
            "websiteUrl": "https://www.hotelscombined.com/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/hostelbookers.jpg",
            "websiteUrl": "https://www.hostelbookers.com/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/hostelworld1.png",
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
            "imageUrl": "assets/photos/tips/accommodations/hicanada1.png",
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
            "imageUrl": "assets/photos/tips/accommodations/hostelscombined.png",
            "websiteUrl": "https://www.hotelscombined.com/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/hostelbookers.jpg",
            "websiteUrl": "https://www.hostelbookers.com/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/hostelworld1.png",
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
            "imageUrl": "assets/photos/tips/accommodations/hicanada1.png",
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
            "imageUrl": "assets/photos/tips/accommodations/hostelscombined.png",
            "websiteUrl": "https://www.hotelscombined.com/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/hostelbookers.jpg",
            "websiteUrl": "https://www.hostelbookers.com/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/hostelworld1.png",
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
            "imageUrl": "assets/photos/tips/accommodations/hicanada1.png",
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
     ];


}
