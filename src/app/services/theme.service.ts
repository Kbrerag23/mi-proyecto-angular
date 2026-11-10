import { Injectable, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private readonly _theme = signal<Theme>(this.getInitialTheme());

  readonly theme = this._theme.asReadonly();
  readonly isDark = computed(() => this._theme() === 'dark');

  constructor() {
    effect(() => {
      const theme = this._theme();
      this.document.documentElement.setAttribute('data-theme', theme);

      if (this.isBrowser) {
        try {
          localStorage.setItem(STORAGE_KEY, theme);
        } catch {
        }
      }
    });
  }

  toggle(): void {
    this._theme.update((t) => (t === 'light' ? 'dark' : 'light'));
  }

  private getInitialTheme(): Theme {
    if (!this.isBrowser) return 'light';

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
