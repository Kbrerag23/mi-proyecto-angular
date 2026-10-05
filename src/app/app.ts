import { Component } from '@angular/core';
import { CalculatorComponent } from './components/calculator/calculator';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalculatorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Calculadora';
}