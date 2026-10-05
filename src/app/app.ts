import { Component } from '@angular/core';
import { CalculatorComponent } from './components/calculator/calculator';
import { TrafficLightComponent } from './components/traffic-light/traffic-light';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalculatorComponent, TrafficLightComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Mi Aplicación';
}