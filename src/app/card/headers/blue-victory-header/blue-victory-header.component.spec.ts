import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueVictoryHeaderComponent } from './blue-victory-header.component';

describe('BlueVictoryHeaderComponent', () => {
  let component: BlueVictoryHeaderComponent;
  let fixture: ComponentFixture<BlueVictoryHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlueVictoryHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlueVictoryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
