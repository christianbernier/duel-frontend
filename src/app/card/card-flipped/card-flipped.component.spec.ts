import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFlippedComponent } from './card-flipped.component';

describe('CardFlippedComponent', () => {
  let component: CardFlippedComponent;
  let fixture: ComponentFixture<CardFlippedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFlippedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFlippedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
