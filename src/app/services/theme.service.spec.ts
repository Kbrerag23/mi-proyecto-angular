import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  
  beforeEach(() => {

    // Limpiar el localStorage antes de cada prueba
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Prueba para verificar el tema inicial
  it('empieza en claro', () => {
    expect(service.theme()).toBe('light');
  });

  it('cambia de tema', () => {
    service.toggle();
    expect(service.theme()).toBe('dark');
  });
});