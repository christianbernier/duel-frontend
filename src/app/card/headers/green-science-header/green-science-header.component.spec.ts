import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenScienceHeaderComponent } from './green-science-header.component';

describe('GreenScienceHeaderComponent', () => {
  let component: GreenScienceHeaderComponent;
  let fixture: ComponentFixture<GreenScienceHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenScienceHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreenScienceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
