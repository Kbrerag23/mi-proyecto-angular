import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})
export class HijoComponent {
  mensaje = input<string>('Mensaje por defecto...');
  mensajeAlPadre = output<string>();

  enviarAlPadre() {
    this.mensajeAlPadre.emit('Hola Papa');
  }
}