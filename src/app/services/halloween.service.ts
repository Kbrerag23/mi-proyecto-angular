import { Injectable, computed, signal } from '@angular/core';
import { ObjetoHalloween } from '../models/objeto-halloween';

@Injectable({ providedIn: 'root' })
export class HalloweenService {
  private readonly _objetos = signal<ObjetoHalloween[]>([]);

  readonly objetos = this._objetos.asReadonly();
  readonly total = computed(() => this._objetos().length);

  agregar(objeto: ObjetoHalloween): void {
    this._objetos.update((lista) => [...lista, objeto]);
  }

  eliminar(objeto: ObjetoHalloween): void {
    this._objetos.update((lista) => lista.filter((item) => item !== objeto));
  }
}