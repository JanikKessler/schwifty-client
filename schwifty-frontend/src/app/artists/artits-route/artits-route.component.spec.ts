import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ArtitsRouteComponent} from './artits-route.component';

describe('ArtitsRouteComponent', () => {
  let component: ArtitsRouteComponent;
  let fixture: ComponentFixture<ArtitsRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtitsRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtitsRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
