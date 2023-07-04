import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyOfResourceTypeComponent } from './any-of-resource-type.component';

describe('AnyOfResourceTypeComponent', () => {
  let component: AnyOfResourceTypeComponent;
  let fixture: ComponentFixture<AnyOfResourceTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnyOfResourceTypeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnyOfResourceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
