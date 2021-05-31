import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistTileRouteCompontentComponent } from './artist-tile-route-compontent.component';

describe('ArtistTileRouteCompontentComponent', () => {
  let component: ArtistTileRouteCompontentComponent;
  let fixture: ComponentFixture<ArtistTileRouteCompontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistTileRouteCompontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistTileRouteCompontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
