import { Component, input, output } from '@angular/core';
import { ObjetoHalloween } from '../../../models/objeto-halloween';

@Component({
  selector: 'app-tarjeta-halloween',
  standalone: true,
  templateUrl: './tarjeta-halloween.component.html',
  styleUrl: './tarjeta-halloween.component.css'
})
export class TarjetaHalloweenComponent {
  datos = input.required<ObjetoHalloween>();
  solicitarEliminacion = output<ObjetoHalloween>();

  eliminarTarjeta(): void {
    this.solicitarEliminacion.emit(this.datos());
  }
}