import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuiqiLiComponent } from './ruiqi-li.component';

describe('RuiqiLiComponent', () => {
  let component: RuiqiLiComponent;
  let fixture: ComponentFixture<RuiqiLiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RuiqiLiComponent]
    })
      .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(RuiqiLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
