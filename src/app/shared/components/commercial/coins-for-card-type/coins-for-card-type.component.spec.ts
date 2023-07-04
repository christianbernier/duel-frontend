import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinsForCardTypeComponent } from './coins-for-card-type.component';

describe('CoinsForCardTypeComponent', () => {
  let component: CoinsForCardTypeComponent;
  let fixture: ComponentFixture<CoinsForCardTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoinsForCardTypeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoinsForCardTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
