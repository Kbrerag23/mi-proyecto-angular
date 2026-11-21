import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { PouClickerComponent } from './pou-clicker';

describe('PouClickerComponent', () => {
  let fixture: ComponentFixture<PouClickerComponent>;
  let component: PouClickerComponent;

  beforeEach(async () => {
    vi.stubGlobal(
      'Audio',
      class {
        play() {
          return Promise.resolve();
        }
      }
    );

    await TestBed.configureTestingModule({
      imports: [PouClickerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PouClickerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('suma un clic', () => {
    component.hacerClic();
    expect(component.contador).toBe(1);
    expect(component.animando).toBe(false);
  });

  it('anima al llegar a la meta', () => {
    for (let i = 0; i < component.META; i++) {
      component.hacerClic();
    }
    expect(component.contador).toBe(20);
    expect(component.animando).toBe(true);
  });

  it('reinicia el contador', () => {
    component.hacerClic();
    component.reiniciar();
    expect(component.contador).toBe(0);
    expect(component.animando).toBe(false);
  });
});