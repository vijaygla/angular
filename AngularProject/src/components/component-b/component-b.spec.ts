import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBComponent } from './component-b';

describe('ComponentBComponent', () => {
  let component: ComponentBComponent;
  let fixture: ComponentFixture<ComponentBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentBComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentBComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
