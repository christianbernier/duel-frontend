import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedArmyHeaderComponent } from './red-army-header.component';

describe('RedArmyHeaderComponent', () => {
  let component: RedArmyHeaderComponent;
  let fixture: ComponentFixture<RedArmyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RedArmyHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RedArmyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
