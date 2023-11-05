import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumCarouselComponent } from './album-carousel.component';

describe('AlbumCarouselComponent', () => {
  let component: AlbumCarouselComponent;
  let fixture: ComponentFixture<AlbumCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AlbumCarouselComponent]
    });
    fixture = TestBed.createComponent(AlbumCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
