import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

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

  it('multiplica', () => {
    component.appendNumber('4');
    component.setOperator('*');
    component.appendNumber('3');
    component.calculateResult();
    expect(component.display).toBe('12');
  });

  it('divide entre cero devuelve 0', () => {
    component.appendNumber('8');
    component.setOperator('/');
    component.appendNumber('0');
    component.calculateResult();
    expect(component.display).toBe('0');
  });

  it('añade el punto decimal', () => {
    component.appendNumber('1');
    component.appendDecimal();
    expect(component.display).toBe('1.');
  });

  it('limpia la pantalla', () => {
    component.appendNumber('9');
    component.clear();
    expect(component.display).toBe('0');
    expect(component.history).toBe('');
  });
});