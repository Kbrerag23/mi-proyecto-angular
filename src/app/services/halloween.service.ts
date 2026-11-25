import { Injectable, signal } from '@angular/core';
import { ObjetoHalloween } from '../models/objeto-halloween';

@Injectable({ providedIn: 'root' })
export class HalloweenService {
  objetos = signal<ObjetoHalloween[]>([]);

  total() {
    return this.objetos().length;
  }

  agregar(objeto: ObjetoHalloween) {
    this.objetos.update((lista) => [...lista, objeto]);
  }

  eliminar(objeto: ObjetoHalloween) {
    this.objetos.update((lista) => lista.filter((item) => item !== objeto));
  }
}