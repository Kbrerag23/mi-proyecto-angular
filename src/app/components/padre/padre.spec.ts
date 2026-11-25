import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PadreComponent } from './padre';

describe('PadreComponent', () => {
  let component: PadreComponent;
  let fixture: ComponentFixture<PadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadreComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PadreComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('muestra cinco hijos', () => {
    expect(fixture.nativeElement.querySelectorAll('app-hijo').length).toBe(5);
  });
});