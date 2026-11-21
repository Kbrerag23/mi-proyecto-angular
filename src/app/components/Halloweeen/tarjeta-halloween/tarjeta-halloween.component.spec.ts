import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarjetaHalloweenComponent } from './tarjeta-halloween.component';
import { ObjetoHalloween } from '../../../models/objeto-halloween';

describe('TarjetaHalloweenComponent', () => {
  let fixture: ComponentFixture<TarjetaHalloweenComponent>;
  let component: TarjetaHalloweenComponent;

  const objeto: ObjetoHalloween = {
    imagen: 'https://img.test/calabaza.png',
    objeto: 'Calabaza',
    descripcion: 'Una calabaza muy grande',
    propietario: 'Ana'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaHalloweenComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaHalloweenComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('datos', objeto);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('muestra los datos del objeto', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h4')?.textContent).toContain('Calabaza');
    expect(el.textContent).toContain('Ana');
  });

  it('emite el objeto al pulsar eliminar', () => {
    let emitido: ObjetoHalloween | null = null;
    component.solicitarEliminacion.subscribe((valor) => (emitido = valor));
    (fixture.nativeElement.querySelector('.btn-eliminar') as HTMLButtonElement).click();
    expect(emitido).toBe(objeto);
  });
});