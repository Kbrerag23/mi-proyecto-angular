import { Component, signal } from '@angular/core';
import { Fruta } from '../../models/fruta';

@Component({
  selector: 'app-lista-frutas',
  standalone: true,
  templateUrl: './lista-frutas.html',
  styleUrl: './lista-frutas.css'
})
export class ListaFrutasComponent {
  private siguienteId = 4;

  inventarioFrutas = signal<Fruta[]>([
    { id: 1, nombre: 'Kiwi', emoji: '🥝', like: false },
    { id: 2, nombre: 'Mango', emoji: '🥭', like: true },
    { id: 3, nombre: 'Sandía', emoji: '🍉', like: false }
  ]);

  incorporarFruta(): void {
    this.inventarioFrutas.update((estadoActual) => [
      ...estadoActual,
      { id: this.siguienteId++, nombre: 'Melocotón', emoji: '🍑', like: false }
    ]);
  }

  alternarLike(id: number): void {
    this.inventarioFrutas.update((estadoActual) =>
      estadoActual.map((fruta) => (fruta.id === id ? { ...fruta, like: !fruta.like } : fruta))
    );
  }
}