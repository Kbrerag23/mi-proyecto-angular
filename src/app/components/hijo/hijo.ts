import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})
export class HijoComponent {
  //dato q recibe del padre
  mensaje = input<string>('Mensaje por defecto...');
  //evento q envia al padre
  mensajeAlPadre = output<string>();

  enviarAlPadre() {
    this.mensajeAlPadre.emit('Hola papa');
  }
}