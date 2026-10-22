import { Component } from '@angular/core';
import { CalculatorComponent } from './components/calculator/calculator';
import { TrafficLightComponent } from './components/traffic-light/traffic-light';
import { HalloweenComponent } from './components/Halloweeen/halloween';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalculatorComponent, TrafficLightComponent, HalloweenComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Mi Aplicación';
}

  