import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderDotsComponent } from './slider-dots.component';

describe('SliderDotsComponent', () => {
  let component: SliderDotsComponent;
  let fixture: ComponentFixture<SliderDotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderDotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
