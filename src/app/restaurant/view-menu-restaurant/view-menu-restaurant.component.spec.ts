import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMenuRestaurantComponent } from './view-menu-restaurant.component';

describe('ViewMenuRestaurantComponent', () => {
  let component: ViewMenuRestaurantComponent;
  let fixture: ComponentFixture<ViewMenuRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMenuRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMenuRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
