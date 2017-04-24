import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahMenuRestaurantComponent } from './tambah-menu-restaurant.component';

describe('TambahMenuRestaurantComponent', () => {
  let component: TambahMenuRestaurantComponent;
  let fixture: ComponentFixture<TambahMenuRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahMenuRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahMenuRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
