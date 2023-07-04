import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerScienceTokensComponent } from './player-science-tokens.component';

describe('PlayerScienceTokensComponent', () => {
  let component: PlayerScienceTokensComponent;
  let fixture: ComponentFixture<PlayerScienceTokensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerScienceTokensComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerScienceTokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
