import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomPreGameComponent } from './room-pre-game.component';

describe('RoomPreGameComponent', () => {
  let component: RoomPreGameComponent;
  let fixture: ComponentFixture<RoomPreGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomPreGameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RoomPreGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
