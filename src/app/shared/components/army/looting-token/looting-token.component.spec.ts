import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LootingTokenComponent } from './looting-token.component';

describe('LootingTokenComponent', () => {
  let component: LootingTokenComponent;
  let fixture: ComponentFixture<LootingTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LootingTokenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LootingTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
