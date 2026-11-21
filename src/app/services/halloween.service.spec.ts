import { TestBed } from '@angular/core/testing';
import { HalloweenService } from './halloween.service';
import { ObjetoHalloween } from '../models/objeto-halloween';

describe('HalloweenService', () => {
  let service: HalloweenService;

  const objeto: ObjetoHalloween = {
    imagen: 'https://img.test/calabaza.png',
    objeto: 'Calabaza',
    descripcion: 'Una calabaza muy grande',
    propietario: 'Ana'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HalloweenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('empieza vacío', () => {
    expect(service.objetos()).toEqual([]);
    expect(service.total()).toBe(0);
  });

  it('agrega objetos', () => {
    service.agregar(objeto);
    expect(service.total()).toBe(1);
    expect(service.objetos()[0]).toBe(objeto);
  });

  it('elimina objetos', () => {
    service.agregar(objeto);
    service.eliminar(objeto);
    expect(service.total()).toBe(0);
  });
});