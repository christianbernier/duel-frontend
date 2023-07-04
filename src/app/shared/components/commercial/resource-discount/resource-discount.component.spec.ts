import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceDiscountComponent } from './resource-discount.component';

describe('ResourceDiscountComponent', () => {
  let component: ResourceDiscountComponent;
  let fixture: ComponentFixture<ResourceDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResourceDiscountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResourceDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
