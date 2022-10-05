import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ReleasesAlbumsComponent} from './releases-albums.component';

describe('ReleasesAlbumsComponent', () => {
  let component: ReleasesAlbumsComponent;
  let fixture: ComponentFixture<ReleasesAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleasesAlbumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleasesAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
