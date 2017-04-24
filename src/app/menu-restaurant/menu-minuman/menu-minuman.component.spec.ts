import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMinumanComponent } from './menu-minuman.component';

describe('MenuMinumanComponent', () => {
  let component: MenuMinumanComponent;
  let fixture: ComponentFixture<MenuMinumanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMinumanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMinumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
