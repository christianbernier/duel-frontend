import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowCommercialHeaderComponent } from './yellow-commercial-header.component';

describe('YellowCommercialHeaderComponent', () => {
  let component: YellowCommercialHeaderComponent;
  let fixture: ComponentFixture<YellowCommercialHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YellowCommercialHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YellowCommercialHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
