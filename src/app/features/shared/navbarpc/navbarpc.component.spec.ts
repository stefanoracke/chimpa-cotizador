import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarpcComponent } from './navbarpc.component';

describe('NavbarpcComponent', () => {
  let component: NavbarpcComponent;
  let fixture: ComponentFixture<NavbarpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarpcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
