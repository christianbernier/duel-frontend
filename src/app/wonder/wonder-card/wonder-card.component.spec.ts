import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WonderCardComponent } from './wonder-card.component';

describe('WonderCardComponent', () => {
  let component: WonderCardComponent;
  let fixture: ComponentFixture<WonderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WonderCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WonderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
