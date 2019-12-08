import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resoureces',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showDiscount = true;
  showAccommodation = false;
  showFlight = false;
  showTourism = false;

  showList(id:any){
    if (id == 0){
        $('#first').toggleClass("clicked-button");
        $('#second').removeClass("clicked-button");
        $('#third').removeClass("clicked-button");
        $('#fourth').removeClass("clicked-button");
        this.showDiscount = true;
        this.showAccommodation = false;
        this.showFlight = false;
        this.showTourism = false;
    }
    else if (id == 1){
        $('#first').removeClass("clicked-button");
        $('#second').toggleClass("clicked-button");
        $('#third').removeClass("clicked-button");
        $('#fourth').removeClass("clicked-button");
        this.showDiscount = false;
        this.showAccommodation = true;
        this.showFlight = false;
        this.showTourism = false;
    }
    else if (id == 2){ 
        $('#first').removeClass("clicked-button");
        $('#second').removeClass("clicked-button");
        $('#third').toggleClass("clicked-button");
        $('#fourth').removeClass("clicked-button");
        this.showDiscount = false;
        this.showAccommodation = false;
        this.showFlight = true;
        this.showTourism = false;
    }
    else if (id == 3){
        $('#first').removeClass("clicked-button");
        $('#second').removeClass("clicked-button");
        $('#third').removeClass("clicked-button");
        $('#fourth').toggleClass("clicked-button");
        this.showDiscount = false;
        this.showAccommodation = false;
        this.showFlight = false;
        this.showTourism = true;
    }
  } 

  discountList = [
    {
      "imageUrl": "assets/photos/resources/discounts/christophers.jpg",
    }
  ]

  accommodationList = [
      [
          {
            "imageUrl": "assets/photos/resources/accommodations/agoda.png",
            "websiteUrl": "https://www.agoda.com/en-ca/"
          },
          {
            "imageUrl": "assets/photos/resources/accommodations/airbnb.jpg",
            "websiteUrl": "https://www.airbnb.ca/"
          },
          {
            "imageUrl": "assets/photos/resources/accommodations/booking.png",
            "websiteUrl": "https://www.booking.com/"
          },
          {
            "imageUrl": "assets/photos/resources/accommodations/couchsurfing.png",
            "websiteUrl": "https://www.couchsurfing.com/"
          },
      ],
      [
          {
            "imageUrl": "assets/photos/resources/accommodations/globalfreeloaders.jpg",
            "websiteUrl": "http://globalfreeloaders.com/"
          },
          {
            "imageUrl": "assets/photos/resources/accommodations/gomio.png",
            "websiteUrl": "http://www.gomio.com/"
          },
          {
            "imageUrl": "assets/photos/resources/accommodations/hicanada1.png",
            "websiteUrl": "https://hihostels.ca/en/destinations/ontario/hi-toronto"
          },
          {
            "imageUrl": "assets/photos/resources/accommodations/homeexchange.png",
            "websiteUrl": "https://www.homeexchange.com/"
          },
      ],
      [
          {
            "imageUrl": "assets/photos/resources/accommodations/homestay.png",
            "websiteUrl": "https://www.homestay.com/"
          },
          {
            "imageUrl": "assets/photos/resources/accommodations/hostels.png",
            "websiteUrl": "http://www.hostels.com/"
          },
          {
            "imageUrl": "assets/photos/resources/accommodations/hostelbookers.jpg",
            "websiteUrl": "https://www.hostelbookers.com/"
          },
          {
            "imageUrl": "assets/photos/resources/accommodations/hostelscentral.png",
            "websiteUrl": "https://www.hostelscentral.com/"
          },
      ],
      [
          {
            "imageUrl": "assets/photos/resources/accommodations/hostelsclub.png",
            "websiteUrl": "https://www.hostelsclub.com/en/"
          },
          {
            "imageUrl": "assets/photos/resources/accommodations/hostelgeeks.png",
            "websiteUrl": "https://hostelgeeks.com/"
          },
          {
            "imageUrl": "assets/photos/resources/accommodations/hostellinginternational.jpg",
            "websiteUrl": "https://www.hihostels.com/"
          },
          {
            "imageUrl": "assets/photos/resources/accommodations/hostelworld1.png",
            "websiteUrl": "https://www.hostelworld.com/"
          },
      ],
      [
          {
            "imageUrl": "assets/photos/resources/accommodations/hostelz.png",
            "websiteUrl": "https://www.hostelz.com/"
          },
          {
            "imageUrl": "assets/photos/resources/accommodations/hostelscombined.png",
            "websiteUrl": "https://www.hotelscombined.com/"
          },
          {
            "imageUrl": "assets/photos/resources/accommodations/kayak.png",
            "websiteUrl": "https://www.ca.kayak.com/hotels"
          },
          {
            "imageUrl": "assets/photos/resources/accommodations/priceline.jpg",
            "websiteUrl": "https://www.priceline.com/"
          },
      ],
      [
          {
            "imageUrl": "assets/photos/resources/accommodations/servas.png",
            "websiteUrl": "https://servas.org/"
          },
          {
            "imageUrl": "assets/photos/resources/accommodations/skyscanner.png",
            "websiteUrl": "https://www.skyscanner.net/hotels"
          },
          {
            "imageUrl": "assets/photos/resources/accommodations/tripadvisor.png",
            "websiteUrl": "https://www.tripadvisor.ca/"
          }
      ]
     ];

     tourismList = [
       [
          {
            "imageUrl": "assets/photos/resources/tourism/adrenaline.png",
            "websiteUrl": "https://www.adrenaline-hunter.com/en-GB/"
          },
          {
            "imageUrl": "assets/photos/resources/accommodations/airbnb.jpg",
            "websiteUrl": "https://www.airbnb.ca/"
          },
          {
            "imageUrl": "assets/photos/resources/tourism/ceetiz.jpg",
            "websiteUrl": "https://www.ceetiz.com/"
          },
          {
            "imageUrl": "assets/photos/resources/tourism/citydiscovery.png",
            "websiteUrl": "https://www.city-discovery.com/"
          }
       ],
       [
          {
            "imageUrl": "assets/photos/resources/tourism/civitatis.jpg",
            "websiteUrl": " https://www.civitatis.com/en/"
          },
          {
            "imageUrl": "assets/photos/resources/tourism/cookiesound.png",
            "websiteUrl": "http://www.cookiesound.com/"
          },
          {
            "imageUrl": "assets/photos/resources/tourism/eoasia.png",
            "websiteUrl": "https://www.eoasia.com/"
          },
          {
            "imageUrl": "assets/photos/resources/tourism/expedia.jpg",
            "websiteUrl": "https://www.expedia.ca/"
          }
     ],
     [
        {
          "imageUrl": "assets/photos/resources/tourism/experienceoz.png",
          "websiteUrl": "https://www.experienceoz.com.au/en"
        },
        {
          "imageUrl": "assets/photos/resources/tourism/getyourguide.png",
          "websiteUrl": "https://www.getyourguide.com/"
        },
        {
          "imageUrl": "assets/photos/resources/tourism/voyagin.png",
          "websiteUrl": "https://www.govoyagin.com/"
        },
        {
          "imageUrl": "assets/photos/resources/tourism/headout.png",
          "websiteUrl": "https://www.headout.com/"
        }
   ],
   [
        {
          "imageUrl": "assets/photos/resources/tourism/likealocalguide.png",
          "websiteUrl": "https://www.likealocalguide.com/"
        },
        {
          "imageUrl": "assets/photos/resources/tourism/isango.png",
          "websiteUrl": "https://www.isango.com/"
        },
        {
          "imageUrl": "assets/photos/resources/tourism/kkday.png",
          "websiteUrl": "https://www.kkday.com/en"
        },
        {
          "imageUrl": "assets/photos/resources/tourism/leezair.png",
          "websiteUrl": "https://www.leezair.com/"
        }
   ],
   [
     {
      "imageUrl": "assets/photos/resources/tourism/peek.jpg",
      "websiteUrl": "https://www.peek.com/"
     },
     {
       "imageUrl": "assets/photos/resources/tourism/liveunbound.JPG",
       "websiteUrl": "https://weliveunbound.com/epicmoments"
     },
     {
       "imageUrl": "assets/photos/resources/tourism/musement.png",
       "websiteUrl": "https://www.musement.com/us/"
     },
     {
       "imageUrl": "assets/photos/resources/tourism/onthegrid.jpg",
       "websiteUrl": "https://onthegrid.city/"
     }
  ],
  [
     {
      "imageUrl": "assets/photos/resources/tourism/toursbylocal.jpg",
      "websiteUrl": "https://www.toursbylocals.com/"
     },
     {
       "imageUrl": "assets/photos/resources/tourism/projectexpedition.png",
       "websiteUrl": "https://www.projectexpedition.com/"
     },
     {
       "imageUrl": "assets/photos/resources/tourism/thrillophilia.png",
       "websiteUrl": "https://www.thrillophilia.com/"
     },
     {
       "imageUrl": "assets/photos/resources/tourism/tiqets.jpg",
       "websiteUrl": "https://www.tiqets.com/en/"
     }
  ],
  [
     {
      "imageUrl": "assets/photos/resources/tourism/withlocals.JPG",
      "websiteUrl": "https://www.withlocals.com/"
     },
     {
       "imageUrl": "assets/photos/resources/tourism/traveloregon.jpg",
       "websiteUrl": "https://traveloregon.com/"
     },
     {
       "imageUrl": "assets/photos/resources/tourism/veltra.png",
       "websiteUrl": "https://www.veltra.com/en/"
     },
     {
       "imageUrl": "assets/photos/resources/tourism/viator.png",
       "websiteUrl": "https://www.viator.com/"
     }
  ],
];

flightList = [
  [
      {
        "imageUrl": "assets/photos/resources/flights/airasia.png",
        "websiteUrl": "https://www.airasia.com/en/gb"
      },
      {
        "imageUrl": "assets/photos/resources/flights/aircanada.png",
        "websiteUrl": "https://www.aircanada.com/ca/en/aco/home.html"
      },
      {
        "imageUrl": "assets/photos/resources/flights/airlineticketcenter.png",
        "websiteUrl": "https://airlineticketcentre.ca/"
      },
      {
        "imageUrl": "assets/photos/resources/flights/airtickets.png",
        "websiteUrl": "https://www.airtickets.com/"
      },
  ],
  [
      {
        "imageUrl": "assets/photos/resources/flights/amatravel.png",
        "websiteUrl": "https://www.amatravel.ca/flights"
      },
      {
        "imageUrl": "assets/photos/resources/flights/americanairlines.JPG",
        "websiteUrl": "https://www.aa.com/homePage.do"
      },
      {
        "imageUrl": "assets/photos/resources/flights/ana.png",
        "websiteUrl": "https://www.ana.co.jp/en/ca/"
      },
      {
        "imageUrl": "assets/photos/resources/flights/cheapair.png",
        "websiteUrl": "https://www.cheapair.com/"
      },
  ],
  [
      {
        "imageUrl": "assets/photos/resources/flights/cheapflights.png",
        "websiteUrl": " https://www.cheapflights.ca/"
      },
      {
        "imageUrl": "assets/photos/resources/flights/cheapair.jpg",
        "websiteUrl": "https://www.cheapair.com/"
      },
      {
        "imageUrl": "assets/photos/resources/flights/delta.jpg",
        "websiteUrl": "https://www.delta.com/ca/en"
      },
      {
        "imageUrl": "assets/photos/resources/flights/emirates.png",
        "websiteUrl": "https://www.emirates.com/ca/english/"
      },
  ],
  [
      {
        "imageUrl": "assets/photos/resources/flights/evaair.jpg",
        "websiteUrl": "https://booking.evaair.com/flyeva/eva/b2c/booking-online.aspx"
      },
      {
        "imageUrl": "assets/photos/resources/tourism/expedia.jpg",
        "websiteUrl": "https://www.expedia.ca/"
      },
      {
        "imageUrl": "assets/photos/resources/flights/farecompare.png",
        "websiteUrl": "https://www.farecompare.com/"
      },
      {
        "imageUrl": "assets/photos/resources/flights/flightnetwork.jpg",
        "websiteUrl": "https://www.flightnetwork.com/"
      },
  ],
  [
      {
        "imageUrl": "assets/photos/resources/flights/flightcentre.png",
        "websiteUrl": "https://www.flightcentre.ca/"
      },
      {
        "imageUrl": "assets/photos/resources/flights/flighthub.jpg",
        "websiteUrl": " https://www.flighthub.com/"
      },
      {
        "imageUrl": "assets/photos/resources/flights/flightaware.png",
        "websiteUrl": "https://flightaware.com/"
      },
      {
        "imageUrl": "assets/photos/resources/flights/frontier.png",
        "websiteUrl": "https://www.flyfrontier.com/"
      },
  ],
  [
      {
        "imageUrl": "assets/photos/resources/flights/goibibo.png",
        "websiteUrl": "https://www.goibibo.com/"
      },
      {
        "imageUrl": "assets/photos/resources/flights/hawaiian.png",
        "websiteUrl": "https://www.hawaiianairlines.com/"
      },
      {
        "imageUrl": "assets/photos/resources/flights/hipmunk.png",
        "websiteUrl": "https://www.hipmunk.com/"
      },
      {
        "imageUrl": "assets/photos/resources/flights/hotwire.png",
        "websiteUrl": "https://www.hotwire.com/flights/"
      }
  ],
  [
    {
      "imageUrl": "assets/photos/resources/flights/indigo.jpg",
      "websiteUrl": "https://www.goindigo.in/"
    },
    {
      "imageUrl": "assets/photos/resources/flights/jetradar.png",
      "websiteUrl": "https://www.jetradar.com/"
    },
    {
      "imageUrl": "assets/photos/resources/accommodations/kayak.png",
      "websiteUrl": "https://www.ca.kayak.com/hotels"
    },
    {
      "imageUrl": "assets/photos/resources/flights/kiwi.png",
      "websiteUrl": "https://www.kiwi.com/ca/"
    }
  ],
  [
    {
      "imageUrl": "assets/photos/resources/flights/KLM.png",
      "websiteUrl": "https://www.klm.com/home/us/en"
    },
    {
      "imageUrl": "assets/photos/resources/flights/lufthansa.png",
      "websiteUrl": "https://www.lufthansa.com/ca/en/homepage"
    },
    {
      "imageUrl": "assets/photos/resources/flights/makemytrip.png",
      "websiteUrl": "https://www.makemytrip.com/"
    },
    {
      "imageUrl": "assets/photos/resources/flights/momondp.png",
      "websiteUrl": "https://www.momondo.ca/?ispredir=true."
    }
  ],
  [
    {
      "imageUrl": "assets/photos/resources/flights/nanakflights.jpg",
      "websiteUrl": "https://www.nanakflights.com/"
    },
    {
      "imageUrl": "assets/photos/resources/flights/onetravel.png",
      "websiteUrl": "https://www.onetravel.com/"
    },
    {
      "imageUrl": "assets/photos/resources/flights/orbitz.png",
      "websiteUrl": "https://www.orbitz.com/"
    },
    {
      "imageUrl": "assets/photos/resources/flights/SCOTTscheapflight.png",
      "websiteUrl": "https://scottscheapflights.com/s"
    }
  ],
  [
    {
      "imageUrl": "assets/photos/resources/flights/seatguru.jpg",
      "websiteUrl": "https://www.seatguru.com/"
    },
    {
      "imageUrl": "assets/photos/resources/flights/skiplagged.png",
      "websiteUrl": "https://skiplagged.com/"
    },
    {
      "imageUrl": "assets/photos/resources/flights/smartfares.png",
      "websiteUrl": "https://www.smartfares.com/"
    },
    {
      "imageUrl": "assets/photos/resources/flights/spirit.png",
      "websiteUrl": "https://www.spirit.com/"
    }
  ],
  [
    {
      "imageUrl": "assets/photos/resources/flights/studentuniverse.png",
      "websiteUrl": "https://www.studentuniverse.com/"
    },
    {
      "imageUrl": "assets/photos/resources/flights/swoop.png",
      "websiteUrl": "https://www.flyswoop.com/book-a-flight/"
    },
    {
      "imageUrl": "assets/photos/resources/flights/travelocity.png",
      "websiteUrl": "https://www.travelocity.ca/Flights"
    },
    {
      "imageUrl": "assets/photos/resources/accommodations/tripadvisor.png",
      "websiteUrl": "https://www.tripadvisor.ca/"
    }
  ],
  [
    {
      "imageUrl": "assets/photos/resources/flights/vayama.jpg",
      "websiteUrl": "https://www.vayama.com/"
    },
    {
      "imageUrl": "assets/photos/resources/flights/volaris.jpg",
      "websiteUrl": "https://www.volaris.com/?culture=en-US&currency=USD"
    },
    {
      "imageUrl": "assets/photos/resources/flights/watchdog.png",
      "websiteUrl": "https://www.airfarewatchdog.com/"
    },
    {
      "imageUrl": "assets/photos/resources/flights/wego.png",
      "websiteUrl": "https://www.wegotravel.ca/flights"
    }
  ],
  [
    {
      "imageUrl": "assets/photos/resources/flights/westjet.png",
      "websiteUrl": "https://www.westjet.com/en-ca/index"
    },
    {
      "imageUrl": "assets/photos/resources/flights/wizz.png",
      "websiteUrl": "https://wizzair.com/en-gb#/"
    }
  ],
 ];
}
