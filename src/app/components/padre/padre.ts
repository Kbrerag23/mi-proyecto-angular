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
  hijos = [1, 2, 3, 4, 5];
  mensajeDinamico = signal('Hola hijo');
  respuestaDelHijo = signal('Esperando respuesta...');

  recibirMensaje(texto: string) {
    this.respuestaDelHijo.set(texto);
  }
}