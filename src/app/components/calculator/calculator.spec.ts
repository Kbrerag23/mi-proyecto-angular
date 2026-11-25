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
});