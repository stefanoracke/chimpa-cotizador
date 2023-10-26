import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Setion7Component } from './setion7.component';

describe('Setion7Component', () => {
  let component: Setion7Component;
  let fixture: ComponentFixture<Setion7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Setion7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Setion7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
