import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasesSongsComponent } from './releases-songs.component';

describe('ReleasesSongsComponent', () => {
  let component: ReleasesSongsComponent;
  let fixture: ComponentFixture<ReleasesSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleasesSongsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleasesSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
