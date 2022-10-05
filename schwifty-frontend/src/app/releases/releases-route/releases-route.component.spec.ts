import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ReleasesRouteComponent} from './releases-route.component';

describe('ReleasesRouteComponent', () => {
  let component: ReleasesRouteComponent;
  let fixture: ComponentFixture<ReleasesRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleasesRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleasesRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
