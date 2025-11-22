import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Astronomia } from './astronomia';

describe('Astronomia', () => {
  let component: Astronomia;
  let fixture: ComponentFixture<Astronomia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Astronomia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Astronomia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
