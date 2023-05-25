import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurpleGuildHeaderComponent } from './purple-guild-header.component';

describe('PurpleGuildHeaderComponent', () => {
  let component: PurpleGuildHeaderComponent;
  let fixture: ComponentFixture<PurpleGuildHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurpleGuildHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurpleGuildHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
