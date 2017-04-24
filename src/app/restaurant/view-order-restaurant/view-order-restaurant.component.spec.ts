import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrderRestaurantComponent } from './view-order-restaurant.component';

describe('ViewOrderRestaurantComponent', () => {
  let component: ViewOrderRestaurantComponent;
  let fixture: ComponentFixture<ViewOrderRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOrderRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrderRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
