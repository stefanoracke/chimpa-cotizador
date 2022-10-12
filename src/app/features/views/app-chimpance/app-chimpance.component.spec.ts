import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChimpanceComponent } from './app-chimpance.component';

describe('AppChimpanceComponent', () => {
  let component: AppChimpanceComponent;
  let fixture: ComponentFixture<AppChimpanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppChimpanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppChimpanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
