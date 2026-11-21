import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HalloweenComponent } from './halloween';
import { HalloweenService } from '../../services/halloween.service';

describe('HalloweenComponent', () => {
  let fixture: ComponentFixture<HalloweenComponent>;
  let component: HalloweenComponent;
  let service: HalloweenService;

  const valores = {
    imagen: 'https://img.test/calabaza.png',
    objeto: 'Calabaza',
    descripcion: 'Una calabaza muy grande',
    propietario: 'Ana'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HalloweenComponent]
    }).compileComponents();

    service = TestBed.inject(HalloweenService);
    fixture = TestBed.createComponent(HalloweenComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('el formulario es inválido al inicio', () => {
    expect(component.formularioHalloween.valid).toBe(false);
  });

  it('no guarda si el formulario es inválido', () => {
    component.enviar();
    expect(service.total()).toBe(0);
  });

  it('guarda un objeto válido y resetea el formulario', () => {
    component.formularioHalloween.setValue(valores);
    component.enviar();
    expect(service.total()).toBe(1);
    expect(component.formularioHalloween.value.objeto).toBeFalsy();
  });

  it('elimina un objeto', () => {
    component.formularioHalloween.setValue(valores);
    component.enviar();
    component.eliminarObjeto(service.objetos()[0]);
    expect(service.total()).toBe(0);
  });
});