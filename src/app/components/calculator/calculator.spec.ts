import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  // beforeEach: antes de cada test creo un componente nuevo y limpio
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorComponent]
      // compileComponents: compila el componente standalone
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    // whenStable: espera a que Angular termine de renderizar
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // 2 + 3 simulando los clics y compruebo que display es '5'
  it('suma', () => {
    component.appendNumber('2');
    component.setOperator('+');
    component.appendNumber('3');
    component.calculateResult();
    expect(component.display).toBe('5');
  });

  it('resta', () => {
    component.appendNumber('9');
    component.setOperator('-');
    component.appendNumber('4');
    component.calculateResult();
    expect(component.display).toBe('5');
  });
});