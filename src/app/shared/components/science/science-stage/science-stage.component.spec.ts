import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceStageComponent } from './science-stage.component';

describe('ScienceStageComponent', () => {
  let component: ScienceStageComponent;
  let fixture: ComponentFixture<ScienceStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScienceStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScienceStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
