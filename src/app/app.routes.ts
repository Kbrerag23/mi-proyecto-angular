import { Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator';
import { HalloweenComponent } from './components/Halloweeen/halloween';
import { TrafficLightComponent } from './components/traffic-light/traffic-light';

export const routes: Routes = [
  { path: '', redirectTo: 'calculator', pathMatch: 'full' },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'halloween', component: HalloweenComponent },
  { path: 'traffic-light', component: TrafficLightComponent },
  { path: '**', redirectTo: 'calculator' }
];