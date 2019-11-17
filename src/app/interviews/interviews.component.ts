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
    ];
  }
}
