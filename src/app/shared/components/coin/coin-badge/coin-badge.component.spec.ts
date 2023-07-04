import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinBadgeComponent } from './coin-badge.component';

describe('CoinBadgeSmallComponent', () => {
  let component: CoinBadgeComponent;
  let fixture: ComponentFixture<CoinBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoinBadgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoinBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
