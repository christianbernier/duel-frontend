import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerJoiningStateComponent } from './player-joining-state.component';

describe('PlayerJoiningStateComponent', () => {
  let component: PlayerJoiningStateComponent;
  let fixture: ComponentFixture<PlayerJoiningStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerJoiningStateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerJoiningStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
