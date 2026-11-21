import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(TestBed.inject(ThemeService)).toBeTruthy();
  });

  it('arranca en claro sin preferencia guardada', () => {
    const service = TestBed.inject(ThemeService);
    expect(service.theme()).toBe('light');
    expect(service.isDark()).toBe(false);
  });

  it('respeta el tema guardado', () => {
    localStorage.setItem('theme', 'dark');
    const service = TestBed.inject(ThemeService);
    expect(service.theme()).toBe('dark');
  });

  it('alterna entre claro y oscuro', () => {
    const service = TestBed.inject(ThemeService);
    service.toggle();
    expect(service.theme()).toBe('dark');
    service.toggle();
    expect(service.theme()).toBe('light');
  });

  it('guarda el tema en el documento y en localStorage', () => {
    const service = TestBed.inject(ThemeService);
    service.toggle();
    TestBed.tick();
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
  });
});