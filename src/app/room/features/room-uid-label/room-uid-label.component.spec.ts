import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomUidLabelComponent } from './room-uid-label.component';

describe('RoomUidLabelComponent', () => {
  let component: RoomUidLabelComponent;
  let fixture: ComponentFixture<RoomUidLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomUidLabelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RoomUidLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
