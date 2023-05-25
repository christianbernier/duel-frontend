import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceTokenComponent } from './science-token.component';

describe('ScienceTokenComponent', () => {
  let component: ScienceTokenComponent;
  let fixture: ComponentFixture<ScienceTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScienceTokenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScienceTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
