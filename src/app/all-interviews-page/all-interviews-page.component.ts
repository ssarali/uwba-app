import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-interviews-page',
  templateUrl: './all-interviews-page.component.html',
  styleUrls: ['./all-interviews-page.component.css']
})
export class AllInterviewsPageComponent implements OnInit {
   
  constructor() { }

  public intervieweeId: number;

  ngOnInit() {
  }

  sendIntervieweeId(id): void{
    
  }

}
