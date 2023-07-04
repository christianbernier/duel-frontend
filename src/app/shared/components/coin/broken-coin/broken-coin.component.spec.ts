import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokenCoinComponent } from './broken-coin.component';

describe('BrokenCoinComponent', () => {
  let component: BrokenCoinComponent;
  let fixture: ComponentFixture<BrokenCoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrokenCoinComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrokenCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
