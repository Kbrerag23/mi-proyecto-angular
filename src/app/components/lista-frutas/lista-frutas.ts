import { Component, signal } from '@angular/core';
import { Fruta } from '../../models/fruta';

@Component({
  selector: 'app-lista-frutas',
  standalone: true,
  templateUrl: './lista-frutas.html',
  styleUrl: './lista-frutas.css'
})
export class ListaFrutasComponent {
  //id pa cada fruta q ya esta
  private siguienteId = 4;

  inventarioFrutas = signal<Fruta[]>([
    { id: 1, nombre: 'Kiwi', emoji: '🥝', like: false },
    { id: 2, nombre: 'Mango', emoji: '🥭', like: true },
    { id: 3, nombre: 'Sandía', emoji: '🍉', like: false }
  ]);
  
  //cndo se hace click añade un melocoton y le da un id unico, es decir 5, luego a la siguente 6, etc
  incorporarFruta(): void {
    this.inventarioFrutas.update((estadoActual) => [
      ...estadoActual,
      { id: this.siguienteId++, nombre: 'Melocotón', emoji: '🍑', like: false }
    ]);
  }

  //cndo clickeas el pulgar arriba/abajo solo cambia la fruta q tiene es id
  alternarLike(id: number): void {
    this.inventarioFrutas.update((estadoActual) =>
      estadoActual.map((fruta) => (fruta.id === id ? { ...fruta, like: !fruta.like } : fruta))
    );
  }
}