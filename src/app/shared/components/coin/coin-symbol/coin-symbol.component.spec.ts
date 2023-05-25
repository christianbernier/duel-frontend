import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinSymbolComponent } from './coin-symbol.component';

describe('CoinSymbolComponent', () => {
  let component: CoinSymbolComponent;
  let fixture: ComponentFixture<CoinSymbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinSymbolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinSymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
