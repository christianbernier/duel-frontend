import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceSymbolComponent } from './science-symbol.component';

describe('ScienceSymbolComponent', () => {
  let component: ScienceSymbolComponent;
  let fixture: ComponentFixture<ScienceSymbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScienceSymbolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScienceSymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
