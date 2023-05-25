import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VictoryPointsBadgeComponent } from './victory-points-badge.component';

describe('VictoryPointsBadgeComponent', () => {
  let component: VictoryPointsBadgeComponent;
  let fixture: ComponentFixture<VictoryPointsBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VictoryPointsBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VictoryPointsBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
