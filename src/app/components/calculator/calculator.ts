import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  templateUrl: './calculator.html', 
  styleUrl: './calculator.css'     
})
export class CalculatorComponent {
  display: string = '0';
  history: string = '';
  firstOperand: number | null = null;
  operator: string | null = null;
  waitingForSecondOperand: boolean = false;

  appendNumber(number: string): void {
    if (this.history.includes('=')) {
      this.clear();
    }

    if (this.waitingForSecondOperand) {
      this.display = number;
      this.waitingForSecondOperand = false;
      this.history += ` ${number}`;
    } else {
      if (this.display === '0') {
        this.display = number;
        this.history = number;
      } else {
        this.display += number;
        this.history += number;
      }
    }
  }

  appendDecimal(): void {
    if (this.history.includes('=')) {
      this.clear();
    }

    if (this.waitingForSecondOperand) {
      this.display = '0.';
      this.history += ' 0.';
      this.waitingForSecondOperand = false;
      return;
    }

    if (!this.display.includes('.')) {
      this.display += '.';
      this.history = this.history ? this.history + '.' : '0.';
    }
  }

  setOperator(op: string): void {
    const inputValue = parseFloat(this.display);

    if (this.history.includes('=')) {
      this.history = `${this.display} ${op}`;
      this.firstOperand = inputValue;
      this.operator = op;
      this.waitingForSecondOperand = true;
      return;
    }

    if (this.waitingForSecondOperand && this.operator) {
      this.operator = op;
      this.history = this.history.slice(0, -1) + op;
      return;
    }

    if (this.firstOperand === null) {
      this.firstOperand = inputValue;
      this.history = `${this.display} ${op}`;
    } else if (this.operator) {
      const result = this.calculate(this.firstOperand, inputValue, this.operator);
      this.display = `${parseFloat(result.toFixed(6))}`;
      this.firstOperand = result;
      this.history = `${this.display} ${op}`;
    }

    this.operator = op;
    this.waitingForSecondOperand = true;
  }

  calculateResult(): void {
    if (this.operator === null || this.firstOperand === null || this.history.includes('=')) return;

    const secondOperand = parseFloat(this.display);
    const result = this.calculate(this.firstOperand, secondOperand, this.operator);

    this.history = `${this.history} =`;
    this.display = `${parseFloat(result.toFixed(6))}`;

    this.firstOperand = null;
    this.operator = null;
    this.waitingForSecondOperand = true;
  }

  private calculate(num1: number, num2: number, op: string): number {
    switch (op) {
      case '+': return num1 + num2;
      case '-': return num1 - num2;
      case '*': return num1 * num2;
      case '/': return num2 === 0 ? 0 : num1 / num2;
      default: return num2;
    }
  }

  clear(): void {
    this.display = '0';
    this.history = '';
    this.firstOperand = null;
    this.operator = null;
    this.waitingForSecondOperand = false;
  }
}