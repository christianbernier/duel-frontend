import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinsForWonderComponent } from './coins-for-wonder.component';

describe('CoinsForWonderComponent', () => {
  let component: CoinsForWonderComponent;
  let fixture: ComponentFixture<CoinsForWonderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinsForWonderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinsForWonderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
