import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmyStageComponent } from './army-stage.component';

describe('ArmyStageComponent', () => {
  let component: ArmyStageComponent;
  let fixture: ComponentFixture<ArmyStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmyStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmyStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
