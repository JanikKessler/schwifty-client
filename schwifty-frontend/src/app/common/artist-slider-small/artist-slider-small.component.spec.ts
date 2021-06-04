import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistSliderSmallComponent } from './artist-slider-small.component';

describe('ArtistSliderSmallComponent', () => {
  let component: ArtistSliderSmallComponent;
  let fixture: ComponentFixture<ArtistSliderSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistSliderSmallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistSliderSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
