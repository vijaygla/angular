import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentAComponent } from './component-a';

describe('ComponentAComponent', () => {
  let component: ComponentAComponent;
  let fixture: ComponentFixture<ComponentAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentAComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentAComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
