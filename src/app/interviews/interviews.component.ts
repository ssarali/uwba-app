import { Component, OnInit } from '@angular/core';
import { IntervieweeModel } from './IntervieweeModel';
import { QuestionsModel } from './QuestionsModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  //this is the tag name which will be used in different component files
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
  //also include here if the component is using any services
})
export class InterviewsComponent implements OnInit {
  //what the component does to support the view, that logic goes here
  constructor(private route: ActivatedRoute) {
  }

  public interviewees: IntervieweeModel[];
  public questions: QuestionsModel;
  public intervieweeId: string;

  public ruiqi: IntervieweeModel;

  //lifecycle hooks like created, mounted
  ngOnInit(): void {
    this.intervieweeId = this.route.snapshot.params.id;
    this.interviewees = [
      this.ruiqi = {
        id: 0,
        name: "Ruiqi Li",
        headerPhoto: "ruiqi_li.jpg",
        headerQuote: "I started backpacking by accident",
        secondQuote: "I was really naive at that time, and I did not know what was there waiting for me. It turned out that the journey totally changed my life",
        thirdQuote: "I usually just go to the breakfast and say something like “Hey, could you please pass me the jam.” to start a conversation",
        backpackingInspiration:
          "I started backpacking by accident. Growing up in Kitchener, even though I had heard of backpacking and have met people" +
          "who told me about their inspiring stories, I thought that is a world that I would never ever get a chance to enter." +
          "During the first year, I had a 4 month summer break which is the only summer off in my program and I was keenly looking" +
          "for something special to do. By coincidence, I was looking on Aiesec, which is a worldwide organization that help students" +
          "find internships or work experience abroad.It was super last minute that I got matched with Ukraine. Back then, I didn’t" +
          "even have a passport, and I literally received my passport 3 days before my flight. I was really naive at that time, and I" +
          "did not know what was there waiting for me. It turned out that the journey totally changed my life. In that program, I" +
          "worked at the same place for 5 weeks, making a lot of friends with local people and students from all over the world.And" +
          "then after the 5 weeks, I backpacked with those friends for 3 weeks in Europe, which was the best experience of my life.",
        typicalDay:
          "Well, I am a super spontaneous person, I might not have a typical day. It usually starts with me waking up really" +
          "late.And then I would go on Trip Advisor to search for what to do.I would usually look up the best restaurants in the city because" +
          "I am a huge traveller foodie.And then I would wake up my friends to have breakfast in hostel.I 100% recommend to stay in a hostel" +
          "when traveling because it is a great chance to meet people.Breakfast is often provided for free at hostel and all the travellers" +
          "would be at the same place for breakfast, which I found it the best chance to meet and talk to people. I usually just go to the" +
          "breakfast and say something like “Hey, could you please pass me the jam.” to start a conversation. It is important to know that" +
          "you won’t be able to get all the information online.If you do, it is probably sponsored.The best advice you can get is through talking to other travelers or local people.",
        interestingBringOnTrip: "",
        backpackingChallenges: "",
        advice: "",
        recommend: ""
      }
    ];
  }
}
