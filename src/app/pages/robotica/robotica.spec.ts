import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Robotica } from './robotica';

describe('Robotica', () => {
  let component: Robotica;
  let fixture: ComponentFixture<Robotica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Robotica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Robotica);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
