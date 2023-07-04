import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCoinsComponent } from './player-coins.component';

describe('PlayerCoinsComponent', () => {
  let component: PlayerCoinsComponent;
  let fixture: ComponentFixture<PlayerCoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerCoinsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
