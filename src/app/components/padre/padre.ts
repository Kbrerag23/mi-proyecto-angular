import { Component, signal } from '@angular/core';
import { HijoComponent } from '../hijo/hijo';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.html',
  styleUrl: './padre.css'
})
export class PadreComponent {
  mensajeDinamico = signal('Hola hijo');
  respuestaDelHijo = signal('Esperando respuesta...');

  recibirMensaje(texto: string) {
    this.respuestaDelHijo.set(texto);
  }
}