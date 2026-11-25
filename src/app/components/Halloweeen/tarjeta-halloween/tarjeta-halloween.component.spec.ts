import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarjetaHalloweenComponent } from './tarjeta-halloween.component';

describe('TarjetaHalloweenComponent', () => {
  let component: TarjetaHalloweenComponent;
  let fixture: ComponentFixture<TarjetaHalloweenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaHalloweenComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaHalloweenComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('datos', {
      imagen: 'foto.png',
      objeto: 'Calabaza',
      descripcion: 'Una calabaza muy grande',
      propietario: 'Ana'
    });
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});