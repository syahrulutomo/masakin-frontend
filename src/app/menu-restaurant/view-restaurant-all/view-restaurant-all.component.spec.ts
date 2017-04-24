import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRestaurantAllComponent } from './view-restaurant-all.component';

describe('ViewRestaurantAllComponent', () => {
  let component: ViewRestaurantAllComponent;
  let fixture: ComponentFixture<ViewRestaurantAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRestaurantAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRestaurantAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
