import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HijoComponent } from './hijo';

describe('HijoComponent', () => {
  let fixture: ComponentFixture<HijoComponent>;
  let component: HijoComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HijoComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HijoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('tiene un mensaje por defecto', () => {
    expect(component.mensaje()).toBe('Mensaje por defecto...');
  });

  it('muestra el mensaje recibido', async () => {
    fixture.componentRef.setInput('mensaje', 'Hola hijo');
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent).toContain('Hola hijo');
  });

  it('emite un mensaje al padre', () => {
    let recibido = '';
    component.mensajeAlPadre.subscribe((texto) => (recibido = texto));
    component.enviarAlPadre();
    expect(recibido).toBe('Hola Papa');
  });
});