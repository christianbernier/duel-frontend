import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkSymbolComponent } from './link-symbol.component';

describe('LinkSymbolComponent', () => {
  let component: LinkSymbolComponent;
  let fixture: ComponentFixture<LinkSymbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkSymbolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkSymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
