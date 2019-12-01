import { Component, OnInit } from '@angular/core';
import { AnswersModel } from './AnswersModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  //this is the tag name which will be used in different component files
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
  //also include here if the component is using any services
})
export class InterviewsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  public interviewees: AnswersModel[];
  public intervieweeId: string;

  public joanna: AnswersModel;
  public vetaParco: AnswersModel;
  public aliSaeed: AnswersModel;
  public joseMontoya: AnswersModel;

  ngOnInit(): void {
    this.intervieweeId = this.route.snapshot.params.id;
    this.interviewees = [
      this.joanna = {
           name: "Joanna Rywak",
           headerQuote: "I was expecting to have fun, but not nearly as much as I did during my adventures.",
           headerPhoto: "joanna/joannaHeaderPhoto.JPG",
           widePhoto: "joanna/joannaWidePhoto.JPG",
           favouriteDestination: "I can never have one answer to this question because there are so many wonderful places out there! " +
           "Europe as a whole is a great backpacking destination because there are so many people doing it, so that " +
           "means a lot of options for hostels, transportation, and making new friends! You also have opportunities " +
           "to get off the beaten path and see some of the continents less-visited gems, and many people speak " +
           "English, making it a whole lot easier to communicate. A great country to start would be France or " +
           "Germany, but my personal favourites are Portugal and Iceland. I really like the mix of culture and nature " +
           "you could get with visiting these two countries, and they’re both popular backpacking destinations. ",
           nextCountry: "The last time I was trip planning for fun with my best friend, we made an entire itinerary for southern " +
           "Spain, Gibraltar and northern Morocco. I don’t know when is the next time I’ll have enough time off to " +
           "go, but hopefully it’s soon! I’ve also never visited Asia, and I feel like I’m missing out on a lot of " +
           "wonderful experiences, so Japan and Nepal are high on my list." ,
           knewPrior: "I’ve been travelling with my family from a young age, so most of the things I did to prepare for/during my " + 
           "my trip came from experience and I didn’t have any major issues during my solo trips. However, as a " +
           "naturally shy person, I wish I reached out to some people living in/travelling to the countries I was " +
           "naturally shy person, I wish I reached out to some people living in/travelling to the countries I was " +
           "but the latter option is often more fun. Lastly, I wish I had left some space in my bag for souvenirs or " +
           "useful items I pick up along the way!",
           tripExpectations: "I was expecting to have fun, but not nearly as much as I did during my adventures. I would say that not " +
           "having strict expectations makes your experience a whole lot more enjoyable because you don’t end up " +
           "having to compare your trip with anything else. The same thing goes with having flexible itineraries, " +
           "especially when travelling with a group.",
           recommendations: "I have plenty of tips, but the main thing would be to not stress, especially if something doesn’t go " +
           "according to plan. All you really need on the road is your passport, money, and phone, so don’t worry " +
           "about not packing or losing something. This also goes hand in hand with the advice I always give: pack light " +
           "light! Most of the time, having checked luggage isn’t necessary and will only slow you down. Don’t " +
           "forget that you can always do laundry at your destination : )",
           img1: "joanna/joannaImg1.JPG",
           img2: "joanna/joannaImg2.JPG",
           img3: "joanna/joannaImg3.JPG",
           img4: "joanna/joannaImg4.JPG",
           img5: "joanna/joannaImg5.JPG",
           img6: "joanna/joannaImg6.JPG",
           firstQuote: " I really like the mix of culture and nature you could get with visiting these two countries, and they’re both popular backpacking destinations.",
        //    secondQuote: "hksjdf",
        //    thirdQuote: "hksjdf",
        //    fourthQuote: "hksjdf",
      },
      this.vetaParco = {
        name: "Veta Parco",
        headerQuote: "I was expecting to have fun, but not nearly as much as I did during my adventures.",
        headerPhoto: "vetaParco/vetaParcoHeader.jpg",
        widePhoto: "vetaParco/longPhoto.jpg",
        favouriteDestination: "Vietnam! The backpacking culture there is what makes it so special. They have a company called ¨Vietnam Backpackers hostel¨ that you can " +
          "find all throughout the country.Every time you go you are bound to see the same people from the last destination! It is the perfect environment to have fun, make friends, and they offer awesome tours. " + 
          "Philippines was my favourite destination.This country is more out of ones comfort zone as there are not many travellers – it makes it very unique and authentic! I enjoyed Philippines because the people " +
          "were so lovely and honest, no one ever tries to scam you! Which is rare in Asia.The landscape is absolutely stunning and it is a very relaxed place compared to Vietnam being very social and full of parties.",
        nextCountry: "Next on my bucket list is Europe! I plan to go on an exchange for one year exploring the continent.",
        knewPrior: "I wish I knew not to cram as many things as possible into one trip. Although one month sounds like a long time, it can get very exhausting very quick if you over book yourself. " +
          "I felt this way when I travelled to Thailand; later on in my travels I made a point to make sure I was in one place for a minimum of 3 nights to properly enjoy it, and not over work myself.",
        tripExpectations: "I expected everything that it was! I honestly was not too shocked when I first arrived. You really have to keep an open mind and trust your gut. Although yes, it is dirtier than Canada and a " +
          "lot of places don’t have toilets or toilet paper, it all comes with the experience! And makes the trip that much more memorable. ",
        recommendations: "I recommend everyone to go on a backpacking trip! You learn so much about yourself and the world. I think seeing life through other people´s eyes really helps you reflect on your own life, and " +
          "make you feel grateful for things we often take for granted in North America.My advice would be to not plan too far ahead.Figure out a specific route you want to follow, do your research, but do not book things " +
          "until 1 day or so before.This allows you to be flexible; stay in a place longer if you love it, change your route if you meet awesome friends to continue travelling with, or leave ASAP without losing money. " +
          "I know people get worried when things aren’t planned, but it is so easy to find accommodation the day before – you will not be stuck on the streets! Go with the flow and embrace every second of it. ",
        img1: "vetaParco/filla.jpg",
        img2: "vetaParco/img2.jpg",
        img3: "vetaParco/download.jpg",
        img4: "vetaParco/fill.jpg",
        img5: "vetaParco/img1.jpg",
        img6: "vetaParco/img3.jpg",
        firstQuote: "Every time you go you are bound to see the same people from the last destination!",
      },
      this.aliSaeed = {
        name: "Ali Saeed",
        headerQuote: "Do it once and you’ll be hooked like the rest of us.",
        headerPhoto: "aliSaeed/aliHeader.JPG",
        widePhoto: "aliSaeed/aliWidePhoto.JPG",
        favouriteDestination: "I have only been backpacking through Turkey and the United States (West Coast) so " +
          "I don’t have a lot to compare but my trip through Turkey was definitely my favourite. Mainly because I’m " +
          "a history nerd and Turkey simply has so much to offer in that regards. ",
        nextCountry: "It would be China. I was actually planning to do this trip in December of this year but I have " +
          "postponed it to April next year. I decided to do a road trip on the East coast from New york to Miami instead, " +
          "for my Christmas break. ",
        knewPrior: "Underpacking is not as big of a problem as overpacking but it is best to make sure you have " +
          "everything you’ll need. Especially keep in mind the plugs might be different depending on where you go so make " +
          "sure you have that Universal Travel Adapter.",
        tripExpectations: "Explore, have fun and meet a lot of cool people from all around the world.",
        recommendations: "If this is your first time, it might be scary but it is definitely a life changing experience. " +
          "You learn so much about yourself as well about the culture and customs of the places you visit. Do it once and " +
          "you’ll be hooked like the rest of us.",
        img1: "aliSaeed/aliImg1.JPG",
        img2: "aliSaeed/aliImg2.JPG",
        img3: "aliSaeed/aliImg3.JPG",
        img4: "",
        img5: "",
        img6: "",
        firstQuote: " You learn so much about yourself as well about the culture and customs of the places you visit."
      },
      this.joseMontoya = {
        name: "Jose Motoya",
        headerQuote: "To get to know myself, what I like and dislike, how I react to sudden change, how well and fast I can adapt to a foreign environment",
        headerPhoto: "joseMontoya/joseMontoya.jpg",
        widePhoto: "joseMontoya/longphoto.png",
        favouriteDestination: "Continental Europe! Because is considerably cheap to travel around (especially Eastern Europe), and practically " +
          "every city has a unique vibe to it.I particularly loved Berlin, Budapest and Prague(in no particular order).And the food! From sauerkraut " +
          "perogies in Poland to wild boar goulash in the Czech Republic, the food is just amazing. ",
        nextCountry: "I would like to finally go to some country in Asia. Taiwan, China or Japan are some of the names that come to my mind. Or India. " +
          "Or Kazakhstan.Or anywhere on Asia(hehe).",
        knewPrior: "That I do not need as many bags as I thought I did. Traveling across Europe is all fun and games until you are running up and down the " +
          "stairs in the crowded Paris subway system with two large bags and a backpack, rushing to make it to the airport.And I had to pay extra for them to fly with me! " +
          "So, I’d definitely say that traveling as light as possible is both cheaper and more comfortable(the word “backpacking” should’ve given me a hint.Plus, you probably " +
          "won’t need those four extra pairs of shoes, anyway).",
        tripExpectations: "I expected it to be an enjoyable learning experience. To face challenges and difficulties that will help me grow as an individual and as a global citizen. " +
          "To meet incredible people from different backgrounds with different perspectives about life and society.To get to know myself, what I like and dislike, how I react to sudden change, " +
          "how well and fast I can adapt to a foreign environment.To be mind - blown by the different flavours and sights I may encounter… And it exceeded my expectations in a million ways.",
        recommendations: "If you are backpacking for a long time (more than a month), you may appreciate tagging someone along. Whether it is an old friend from back home, or a new friend you meet " +
          "during your travels, it can definitely help with the homesickness.And you can split the costs! Last summer I traveled across many different countries by myself, but at a certain point, I " +
          "definitely felt like I could use a travel buddy. (Don’t take me wrong: some traveling on your own is great, for sure, but sometimes I just needed someone to relive the experiences I had gone through with).",
        img1: "joseMontoya/market.png",
        img2: "joseMontoya/harrypotta.jpg",
        img3: "joseMontoya/cowmoo.jpg",
        img4: "joseMontoya/clowngirl.jpg",
        img5: "joseMontoya/rome.jpg",
        img6: "joseMontoya/food.jpg",
        firstQuote: " To face challenges and difficulties that will help me grow as an individual and as a global citizen.",
        //    secondQuote: "hksjdf",
        //    thirdQuote: "hksjdf",
        //    fourthQuote: "hksjdf",
      }
    ];
  }
}
