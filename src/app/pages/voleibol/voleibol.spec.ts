import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Voleibol } from './voleibol';

describe('Voleibol', () => {
  let component: Voleibol;
  let fixture: ComponentFixture<Voleibol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Voleibol]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Voleibol);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
