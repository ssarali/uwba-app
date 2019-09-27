import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInterviewsPageComponent } from './all-interviews-page.component';

describe('AllInterviewsPageComponent', () => {
  let component: AllInterviewsPageComponent;
  let fixture: ComponentFixture<AllInterviewsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllInterviewsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllInterviewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
