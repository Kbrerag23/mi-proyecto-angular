import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  templateUrl: './calculator.html',
  styleUrl: './calculator.css'
})
export class CalculatorComponent {
  display = '0';
  numero1 = 0;
  operador = '';
  nuevoNumero = true;

  appendNumber(numero: string) {
    if (this.nuevoNumero || this.display === '0') {
      this.display = numero;
      this.nuevoNumero = false;
    } else {
      this.display = this.display + numero;
    }
  }

  setOperator(op: string) {
    this.numero1 = parseFloat(this.display);
    this.operador = op;
    this.nuevoNumero = true;
  }

  calculateResult() {
    const numero2 = parseFloat(this.display);
    let resultado = 0;

    if (this.operador === '+') {
      resultado = this.numero1 + numero2;
    } else if (this.operador === '-') {
      resultado = this.numero1 - numero2;
    } else if (this.operador === '*') {
      resultado = this.numero1 * numero2;
    } else if (this.operador === '/') {
      if (numero2 !== 0) {
        resultado = this.numero1 / numero2;
      }
    } else {
      return;
    }

    this.display = String(resultado);
    this.operador = '';
    this.nuevoNumero = true;
  }

  clear() {
    this.display = '0';
    this.numero1 = 0;
    this.operador = '';
    this.nuevoNumero = true;
  }
}