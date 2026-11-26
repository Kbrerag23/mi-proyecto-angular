import { Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator';
import { HalloweenComponent } from './components/Halloweeen/halloween';
import { TrafficLightComponent } from './components/traffic-light/traffic-light';
import { ListaFrutasComponent } from './components/lista-frutas/lista-frutas';
import { PadreComponent } from './components/padre/padre';
import { PouClickerComponent } from './components/pou-clicker/pou-clicker';

export const routes: Routes = [

  //redirije al semaforo si no se especifica ninguna ruta
  { path: '', redirectTo: 'semaforo', pathMatch: 'full' },
  { path: 'semaforo', component: TrafficLightComponent },
  { path: 'lista-frutas', component: ListaFrutasComponent },
  { path: 'formulario-halloween', component: HalloweenComponent },
  { path: 'padre', component: PadreComponent },
  // los redirectTo son alias de rutas antiguas
  { path: 'padre-hijo', redirectTo: 'padre', pathMatch: 'full' },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'halloween', redirectTo: 'formulario-halloween', pathMatch: 'full' },
  { path: 'traffic-light', redirectTo: 'semaforo', pathMatch: 'full' },
  { path: 'pou', component: PouClickerComponent },
  // si no existe la ruta, redirige al semaforo
  { path: '**', redirectTo: 'semaforo' }
];