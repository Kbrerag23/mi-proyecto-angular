import { Component } from '@angular/core';

@Component({
  selector: 'app-pou-clicker',
  standalone: true,
  templateUrl: './pou-clicker.html',
  styleUrls: ['./pou-clicker.css']
})
export class PouClickerComponent {
  readonly META = 20;
  contador: number = 0;
  animando: boolean = false;

  hacerClic() {
    this.contador++;

    if (this.contador % this.META === 0) {
      this.animando = true;
      this.reproducir('/Pouimpresionado.mp3');
    } else {
      this.reproducir('/NO.mp3');
    }
  }

  reiniciar() {
    this.contador = 0;
    this.animando = false;
  }

  private reproducir(ruta: string) {
    new Audio(ruta).play().catch(() => {});
  }
}