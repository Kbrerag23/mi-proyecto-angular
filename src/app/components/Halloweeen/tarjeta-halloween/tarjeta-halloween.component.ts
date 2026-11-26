import { Component, input, output } from '@angular/core';
import { ObjetoHalloween } from '../../../models/objeto-halloween';

@Component({
  selector: 'app-tarjeta-halloween',
  standalone: true,
  templateUrl: './tarjeta-halloween.component.html',
  styleUrl: './tarjeta-halloween.component.css'
})
export class TarjetaHalloweenComponent {

  //la terjeta siosi tien q tener datos
  datos = input.required<ObjetoHalloween>();
  //avisa a el componente padre que se quiere eliminar la tarjeta (halloween)
  solicitarEliminacion = output<ObjetoHalloween>();

  eliminarTarjeta(): void {
    this.solicitarEliminacion.emit(this.datos());
  }
}