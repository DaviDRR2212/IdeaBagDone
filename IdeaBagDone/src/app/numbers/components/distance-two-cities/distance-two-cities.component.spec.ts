import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceTwoCitiesComponent } from './distance-two-cities.component';

describe('DistanceTwoCitiesComponent', () => {
  let component: DistanceTwoCitiesComponent;
  let fixture: ComponentFixture<DistanceTwoCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistanceTwoCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceTwoCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
