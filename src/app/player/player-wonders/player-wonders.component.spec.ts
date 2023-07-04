import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerWondersComponent } from './player-wonders.component';

describe('PlayerWondersComponent', () => {
  let component: PlayerWondersComponent;
  let fixture: ComponentFixture<PlayerWondersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerWondersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerWondersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
