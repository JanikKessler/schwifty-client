import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistCarouselComponent } from './artist-carousel.component';

describe('ArtistCarouselComponent', () => {
  let component: ArtistCarouselComponent;
  let fixture: ComponentFixture<ArtistCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ArtistCarouselComponent]
    });
    fixture = TestBed.createComponent(ArtistCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
