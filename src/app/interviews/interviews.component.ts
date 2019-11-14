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
  public questionsModel: QuestionsModel;
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
        img1: "img-2.JPG",
        img2: "img-5.JPG",
        img3: "img-4.JPG",
        img4: "img-6.jpg",
        typicalDayPhoto: "img-7.JPG",
        headerQuote: "I started backpacking by accident",
        longPhoto: "img-1.jpg",
        secondQuote: "I was really naive at that time, and I did not know what was there waiting for me. It turned out that the journey totally changed my life ",
        thirdQuote: "I usually just go to the breakfast and say something like “Hey, could you please pass me the jam.” to start a conversation ",
        fourthQuote: "Try to use all the opportunities to connect to people who speak the same language when you are at somewhere risky",
        backpackingInspiration:
          "I started backpacking by accident. Growing up in Kitchener, even though I had heard of backpacking and have met people who told me about their inspiring stories, " +
          "I thought that is a world that I would never ever get a chance to enter.During the first year, I had a 4 month summer break which is the only summer off in my program " +
          "and I was keenly looking for something special to do. By coincidence, I was looking on Aiesec, which is a worldwide organization that help students find internships or " +
          "work experience abroad.It was super last minute that I got matched with Ukraine. Back then, I didn't even have a passport, and I literally received my passport 3 days " +
          "before my flight.I was really naive at that time, and I did not know what was there waiting for me.It turned out that the journey totally changed my life. " +
          "In that program, I worked at the same place for 5 weeks, making a lot of friends with local people and students from all over the world.And then after the 5 weeks, I " +
          "backpacked with those friends for 3 weeks in Europe, which was the best experience of my life.",
        typicalDay:
          "Well, I am a super spontaneous person, I might not have a typical day. It usually starts with me waking up really " +
          "late.And then I would go on Trip Advisor to search for what to do.I would usually look up the best restaurants in the city because " +
          "I am a huge traveller foodie.And then I would wake up my friends to have breakfast in hostel.I 100% recommend to stay in a hostel " +
          "when traveling because it is a great chance to meet people.Breakfast is often provided for free at hostel and all the travellers " +
          "would be at the same place for breakfast, which I found it the best chance to meet and talk to people. I usually just go to the " +
          "breakfast and say something like “Hey, could you please pass me the jam.” to start a conversation. It is important to know that " +
          "you won’t be able to get all the information online.If you do, it is probably sponsored.The best advice you can get is through talking to other travelers or local people. ",
        interestingBringOnTrip:
          "Polaroid - what i love is giving strangers I met a piece of our memory who I probably will never see again.That polorioaed is " +
          "living proof that our memories are real. In the future, I might even pass you on the streets, maybe of New York, and we probably won’t even " +
          "recognise each other.Because the person we become will never be the same as the the childish, foolish, crazy one in our Polaroids. " +
          "Also, it the person in our polaroid we will never meet again, it is a snapshot of who we were at exactly that time no matter how much we change later.",
        challenge1:
          "Time: I believe that if you love something, you would wake up wanting to do it tomorrow. For me, my biggest passion is travelling, so I will find time to travel, " +
          "just like how everyone else will find time to watch netflix.",
        challenge2:
          "Finance: There are plenty of ways to travel on a budget. With $1,000 and some travel budget management skills, you can basically go anywhere " +
          "in the world.If you just make a small change to your spending, saving $100 per month, it could be easy as giving up Bubble Tea, you would be able to save $1, 000 " +
          "for 10 months and can support yourself an once-in -life travel you’ve been dreaming of.",
        challenge3:
          "Safety: I was very bold that I have been to some quite dangerous places, like anti-government concert in Santiago in Chile or streets with tear gas, " +
          "fire ash and burnt after protest in Valparaiso in Chile. I was lucky enough to survive or be helped every time.Like when I was walking at " +
          "Downtown Valparaiso, local residents, who do not speak English, used their body language to tell us not to go down the street anymore.When we happened " +
          "to walk into some dangerous areas, we ask those security guard for direction and they just left their work and walk with us to the safe area.",
        challenge4:
          "One tip I have to mention is that - try to use all the opportunities toconnect to people who speak the same language when you are at somewhere risky. " +
          "But, if you do not go to somewhere risky, the odds of getting hurt is very small, if you have the awareness of protecting yourself and asking for help.",
        challenge5:
          "Company: it is hard to find a travel company because who you are with will completely determine your experience.I have traveled with multiple people before. " +
          "Everytime we have amazing memories but also a lot of problems.I am still good friends with them after the trip, but just be careful " +
          "when you are selecting your travel company.It is important to communicate and know about what kind of travelers they are and what they expect from the trip. " +
          "From my stories, you vff can probably see that I am a very open-minded and adventurous person who wants to talk to everyone and exploring " +
          "exotic places, so I would get disappointed if my company is more sheltered and less willing to take the risk.",
        advice:
          "You don‘t have to be the craziest person that goes to the most exotic destination that you are not comfortable with. Honestly, " +
          "just start from anywhere that you are curious about.Part of the important lesson to learn from backpacking is to be in a situation " +
          "where you can be independent and you can make choices completely yourself, this is the best way to grow. Take care of your belongings, " +
          "especially your passport and your phone.Not every country is safe like Canada.I don’t think you can perfectly prepare for your " +
          "backpacking trip, just have a positive mindset all the time, and always have fun!",
        recommend1:
          "As a huge foodie and health fanatic, I have finally became successful to lose weight without sacrificing the flavour and my favorite “junk” foods. " +
          "I believe that you don’t have to compromise the taste of your favorite food to be skinny.You won’t believe how just switching from starch to shirataki " +
          "noodles, cauliflower dough could change your life.I can make everyone’s favorite food with half of the normal calories.",
        recommend2:
          "I might be starting a blog to teach people how to make that. It is still in the progress. I will make an announcement when i am ready.So follow me on " +
          "insta, @feistyruiqi! Check it out if you wanna eat good food everyday without worrying about calories.And you are welcome to ask me any question about backpacking too!"
      }
    ];
  }
}
