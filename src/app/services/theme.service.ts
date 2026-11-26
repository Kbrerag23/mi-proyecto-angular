import { Injectable, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private platformId = inject(PLATFORM_ID);

  // signal con el tema, lo lee del localStorage al arrancar
  theme = signal<Theme>(this.leerTema());

  // computed: se recalcula solo cuando cambia theme
  isDark = computed(() => this.theme() === 'dark');

  constructor() {
    effect(() => {
      // es para si solo estamos en el navegador
      if (isPlatformBrowser(this.platformId)) {
        // actualiza el atributo data-theme del html pa q se activen las variables dl css y lo guarda en localStorage
        document.documentElement.setAttribute('data-theme', this.theme());
        // guarda el tema en localStorage
        localStorage.setItem('theme', this.theme());
      }
    });
  }

  //hace el cambio
  toggle() {
    this.theme.update((t) => (t === 'light' ? 'dark' : 'light'));
  }

  // lee el tema del localStorage, si no hay nada devuelve light osea el claro
  private leerTema(): Theme {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
    }
    return 'light';
  }
}