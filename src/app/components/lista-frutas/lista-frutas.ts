import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-lista-frutas',
  standalone: true,
  templateUrl: './lista-frutas.html',
  styleUrl: './lista-frutas.css'
})
export class ListaFrutasComponent {
  inventarioFrutas = signal<string[]>(['Kiwi', 'Mango', 'Sandía']);

  incorporarFruta(): void {
    this.inventarioFrutas.update((estadoActual) => [...estadoActual, 'Melocotón']);
  }
}