import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arena2Component } from './arena2.component';

describe('Arena2Component', () => {
  let component: Arena2Component;
  let fixture: ComponentFixture<Arena2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arena2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Arena2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
