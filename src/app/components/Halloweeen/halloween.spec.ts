import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HalloweenComponent } from './halloween';

describe('HalloweenComponent', () => {
  let component: HalloweenComponent;
  let fixture: ComponentFixture<HalloweenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HalloweenComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HalloweenComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test para verificar que el formulario empieza inválido
  it('el formulario empieza inválido', () => {
    expect(component.formularioHalloween.valid).toBe(false);
  });
});