import { TestBed } from '@angular/core/testing';
import { HalloweenService } from './halloween.service';

describe('HalloweenService', () => {
  let service: HalloweenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HalloweenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('agrega un objeto', () => {
    service.agregar({
      imagen: 'foto.png',
      objeto: 'Calabaza',
      descripcion: 'Una calabaza muy grande',
      propietario: 'Ana'
    });
    expect(service.total()).toBe(1);
  });
});