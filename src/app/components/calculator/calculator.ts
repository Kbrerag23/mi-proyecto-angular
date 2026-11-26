import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  templateUrl: './calculator.html',
  styleUrl: './calculator.css'
})
export class CalculatorComponent {
  // muestra el número en pantalla
  display = '0';
  // guarda el primer numero
  numero1 = 0;
  // guarda el operador
  operador = '';
  // indica si se está introduciendo un nuevo número
  nuevoNumero = true;

  //si es un numero nuevo o el display es 0, se reemplaza el display con el nuevo numero, si no, se juntan (2y3=23)
  appendNumber(numero: string) {
    if (this.nuevoNumero || this.display === '0') {
      this.display = numero;
      this.nuevoNumero = false;
    } else {
      this.display = this.display + numero;
    }
  }

  //pasa el texto a numero y marca q viene otro y tmbn guarda el operador
  setOperator(op: string) {
    this.numero1 = parseFloat(this.display);
    this.operador = op;
    this.nuevoNumero = true;
  }

  //pa calcular el resultado segun el operador y los numeros guardados
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

  //el botoncico C tipico q resetea todo
  clear() {
    this.display = '0';
    this.numero1 = 0;
    this.operador = '';
    this.nuevoNumero = true;
  }
}