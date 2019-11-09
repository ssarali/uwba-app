import { Component, OnInit } from '@angular/core';
import { IntervieweeModel } from './IntervieweeModel';
import { QuestionsModel } from './QuestionsModel';


@Component({
  //this is the tag name which will be used in different component files
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
  //also include here if the component is using any services
})
export class InterviewsComponent implements OnInit {
//what the component does to support the view, that logic goes here
  constructor() {
  }

  public interviewees: IntervieweeModel[];
  public questions: QuestionsModel[];

  public ruiqi: IntervieweeModel;

  //lifecycle hooks like created, mounted
  ngOnInit(): void {
    this.interviewees = [
      this.ruiqi = {
        id: 0,
        name: "Ruiqi Li",
        headerQuote: "",
        backpackingInspiration: "",
        typicalDay: "",
        interestingBringOnTrip: "",
        backpackingChallenges: "",
        advice: "",
        recommend: ""
      }
    ];
  }
}
