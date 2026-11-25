import { Injectable, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private platformId = inject(PLATFORM_ID);

  theme = signal<Theme>(this.leerTema());
  isDark = computed(() => this.theme() === 'dark');

  constructor() {
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        document.documentElement.setAttribute('data-theme', this.theme());
        localStorage.setItem('theme', this.theme());
      }
    });
  }

  toggle() {
    this.theme.update((t) => (t === 'light' ? 'dark' : 'light'));
  }

  private leerTema(): Theme {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
    }
    return 'light';
  }
}