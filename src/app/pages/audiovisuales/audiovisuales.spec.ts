import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Audiovisuales } from './audiovisuales';

describe('Audiovisuales', () => {
  let component: Audiovisuales;
  let fixture: ComponentFixture<Audiovisuales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Audiovisuales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Audiovisuales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
