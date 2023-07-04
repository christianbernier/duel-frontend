import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrayProductionHeaderComponent } from './gray-production-header.component';

describe('GrayProductionHeaderComponent', () => {
  let component: GrayProductionHeaderComponent;
  let fixture: ComponentFixture<GrayProductionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrayProductionHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GrayProductionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
