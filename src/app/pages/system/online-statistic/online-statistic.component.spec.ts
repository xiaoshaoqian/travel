import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineStatisticComponent } from './online-statistic.component';

describe('OnlineStatisticComponent', () => {
  let component: OnlineStatisticComponent;
  let fixture: ComponentFixture<OnlineStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineStatisticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
