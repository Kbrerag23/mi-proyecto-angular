import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { ObjetoHalloween } from '../halloween';

@Component({
  selector: 'app-tarjeta-halloween',
  standalone: true,
  templateUrl: './tarjeta-halloween.component.html',
  styleUrl: './tarjeta-halloween.component.css'
})
export class TarjetaHalloweenComponent {
  @Input() datos!: ObjetoHalloween;
  @Output() solicitarEliminacion = new EventEmitter<ObjetoHalloween>();

  eliminarTarjeta() {
    this.solicitarEliminacion.emit(this.datos);
  }
}