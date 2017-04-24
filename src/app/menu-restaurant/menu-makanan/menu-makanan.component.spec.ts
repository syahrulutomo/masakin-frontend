import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMakananComponent } from './menu-makanan.component';

describe('MenuMakananComponent', () => {
  let component: MenuMakananComponent;
  let fixture: ComponentFixture<MenuMakananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMakananComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMakananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
