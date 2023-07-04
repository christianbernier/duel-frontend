import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomGameInProgressComponent } from './room-game-in-progress.component';

describe('RoomGameInProgressComponent', () => {
  let component: RoomGameInProgressComponent;
  let fixture: ComponentFixture<RoomGameInProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomGameInProgressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RoomGameInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
