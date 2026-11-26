import { Injectable, signal } from '@angular/core';
import { ObjetoHalloween } from '../models/objeto-halloween';

@Injectable({ providedIn: 'root' })
export class HalloweenService {

  //signal con la lista de objetos de halloween, esta aqui pa q salga en el formu y la navbar
  objetos = signal<ObjetoHalloween[]>([]);

  total() {
    return this.objetos().length;
  }

  //agrega un objeto a la lista
  agregar(objeto: ObjetoHalloween) {
    this.objetos.update((lista) => [...lista, objeto]);
  }

  //elimina un objeto de la lista
  eliminar(objeto: ObjetoHalloween) {
    this.objetos.update((lista) => lista.filter((item) => item !== objeto));
  }
}