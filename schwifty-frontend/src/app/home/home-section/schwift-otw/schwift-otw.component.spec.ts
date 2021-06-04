import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchwiftOtwComponent } from './schwift-otw.component';

describe('SchwiftOtwComponent', () => {
  let component: SchwiftOtwComponent;
  let fixture: ComponentFixture<SchwiftOtwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchwiftOtwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchwiftOtwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
