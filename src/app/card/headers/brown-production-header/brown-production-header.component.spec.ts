import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrownProductionHeaderComponent } from './brown-production-header.component';

describe('BrownProductionHeaderComponent', () => {
  let component: BrownProductionHeaderComponent;
  let fixture: ComponentFixture<BrownProductionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrownProductionHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrownProductionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
