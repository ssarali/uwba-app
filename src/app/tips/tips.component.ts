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
            "imageUrl": "assets/photos/tips/accommodations/agoda.png",
            "websiteUrl": "https://www.agoda.com/en-ca/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/airbnb.png",
            "websiteUrl": "https://www.airbnb.ca/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/booking.png",
            "websiteUrl": "https://www.booking.com/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/couchsurfing.png",
            "websiteUrl": "https://www.couchsurfing.com/"
          },
      ],
      [
          {
            "imageUrl": "assets/photos/tips/accommodations/globalfreeloaders.jpg",
            "websiteUrl": "http://globalfreeloaders.com/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/gomio.png",
            "websiteUrl": "http://www.gomio.com/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/hicanada1.png",
            "websiteUrl": "https://hihostels.ca/en/destinations/ontario/hi-toronto"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/homeexchange.png",
            "websiteUrl": "https://www.homeexchange.com/"
          },
      ],
      [
          {
            "imageUrl": "assets/photos/tips/accommodations/homestay.png",
            "websiteUrl": "https://www.homestay.com/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/hostels.png",
            "websiteUrl": "http://www.hostels.com/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/hostelbookers.jpg",
            "websiteUrl": "https://www.hostelbookers.com/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/hostelscentral.png",
            "websiteUrl": "https://www.hostelscentral.com/"
          },
      ],
      [
          {
            "imageUrl": "assets/photos/tips/accommodations/hostelsclub.png",
            "websiteUrl": "https://www.hostelsclub.com/en/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/hostelgeeks.png",
            "websiteUrl": "https://hostelgeeks.com/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/hostellinginternational.jpg",
            "websiteUrl": "https://www.hihostels.com/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/hostelworld1.png",
            "websiteUrl": "https://www.hostelworld.com/"
          },
      ],
      [
          {
            "imageUrl": "assets/photos/tips/accommodations/hostelz.png",
            "websiteUrl": "https://www.hostelz.com/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/hostelscombined.png",
            "websiteUrl": "https://www.hotelscombined.com/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/kayak.png",
            "websiteUrl": "https://www.ca.kayak.com/hotels"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/priceline.jpg",
            "websiteUrl": "https://www.priceline.com/"
          },
      ],
      [
          {
            "imageUrl": "assets/photos/tips/accommodations/servas.png",
            "websiteUrl": "https://servas.org/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/skyscanner.png",
            "websiteUrl": "https://www.skyscanner.net/hotels"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/tripadvisor.png",
            "websiteUrl": "https://www.tripadvisor.ca/"
          }
      ]
     ];

     tourismList = [
       [
          {
            "imageUrl": "assets/photos/tips/tourism/adrenaline.png",
            "websiteUrl": "https://www.adrenaline-hunter.com/en-GB/"
          },
          {
            "imageUrl": "assets/photos/tips/accommodations/airbnb.png",
            "websiteUrl": "https://www.airbnb.ca/"
          },
          {
            "imageUrl": "assets/photos/tips/tourism/ceetiz.jpg",
            "websiteUrl": "https://www.ceetiz.com/"
          },
          {
            "imageUrl": "assets/photos/tips/tourism/citydiscovery.png",
            "websiteUrl": "https://www.city-discovery.com/"
          }
       ],
       [
          {
            "imageUrl": "assets/photos/tips/tourism/civitatis.jpg",
            "websiteUrl": " https://www.civitatis.com/en/"
          },
          {
            "imageUrl": "assets/photos/tips/tourism/cookiesound.png",
            "websiteUrl": "http://www.cookiesound.com/"
          },
          {
            "imageUrl": "assets/photos/tips/tourism/eoasia.png",
            "websiteUrl": "https://www.eoasia.com/"
          },
          {
            "imageUrl": "assets/photos/tips/tourism/expedia.jpg",
            "websiteUrl": "https://www.expedia.ca/"
          }
     ],
     [
        {
          "imageUrl": "assets/photos/tips/tourism/experienceoz.png",
          "websiteUrl": "https://www.experienceoz.com.au/en"
        },
        {
          "imageUrl": "assets/photos/tips/tourism/getyourguide.png",
          "websiteUrl": "https://www.getyourguide.com/"
        },
        {
          "imageUrl": "assets/photos/tips/tourism/voyagin.png",
          "websiteUrl": "https://www.govoyagin.com/"
        },
        {
          "imageUrl": "assets/photos/tips/tourism/headout.png",
          "websiteUrl": "https://www.headout.com/"
        }
   ],
   [
       {
        "imageUrl": "assets/photos/tips/tourism/headout.png",
        "websiteUrl": "https://www.headout.com/"
        },
        {
          "imageUrl": "assets/photos/tips/tourism/isango.png",
          "websiteUrl": "https://www.isango.com/"
        },
        {
          "imageUrl": "assets/photos/tips/tourism/kkday.png",
          "websiteUrl": "https://www.kkday.com/en"
        },
        {
          "imageUrl": "assets/photos/tips/tourism/leezair.png",
          "websiteUrl": "https://www.leezair.com/"
        }
   ],
   [
    {
     "imageUrl": "assets/photos/tips/tourism/likealocalguide.png",
     "websiteUrl": "https://www.likealocalguide.com/"
     },
     {
       "imageUrl": "assets/photos/tips/tourism/liveunbound.JPG",
       "websiteUrl": "https://weliveunbound.com/epicmoments"
     },
     {
       "imageUrl": "assets/photos/tips/tourism/musement.png",
       "websiteUrl": "https://www.musement.com/us/"
     },
     {
       "imageUrl": "assets/photos/tips/tourism/onthegrid.jpg",
       "websiteUrl": "https://onthegrid.city/"
     }
  ],
  [
    {
     "imageUrl": "assets/photos/tips/tourism/peek.jpg",
     "websiteUrl": "https://www.peek.com/"
     },
     {
       "imageUrl": "assets/photos/tips/tourism/projectexpedition.png",
       "websiteUrl": "https://www.projectexpedition.com/"
     },
     {
       "imageUrl": "assets/photos/tips/tourism/thrillophilia.png",
       "websiteUrl": "https://www.thrillophilia.com/"
     },
     {
       "imageUrl": "assets/photos/tips/tourism/tiqets.jpg",
       "websiteUrl": "https://www.tiqets.com/en/"
     }
  ],
  [
    {
     "imageUrl": "assets/photos/tips/tourism/toursbylocal.jpg",
     "websiteUrl": "https://www.toursbylocals.com/"
     },
     {
       "imageUrl": "assets/photos/tips/tourism/traveloregon.jpg",
       "websiteUrl": "https://traveloregon.com/"
     },
     {
       "imageUrl": "assets/photos/tips/tourism/veltra.png",
       "websiteUrl": "https://www.veltra.com/en/"
     },
     {
       "imageUrl": "assets/photos/tips/tourism/viator.png",
       "websiteUrl": "https://www.viator.com/"
     }
  ],
  [
    {
     "imageUrl": "assets/photos/tips/tourism/withlocals.JPG",
     "websiteUrl": "https://www.withlocals.com/"
     }
  ]
];



}
