import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NavBarComponent } from './nav-bar';
import { ThemeService } from '../../services/theme.service';
import { HalloweenService } from '../../services/halloween.service';

describe('NavBarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(NavBarComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('muestra los seis enlaces', async () => {
    const fixture = TestBed.createComponent(NavBarComponent);
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelectorAll('nav a').length).toBe(6);
  });

  it('cambia el tema al pulsar el interruptor', async () => {
    const theme = TestBed.inject(ThemeService);
    const fixture = TestBed.createComponent(NavBarComponent);
    await fixture.whenStable();
    const antes = theme.theme();
    (fixture.nativeElement.querySelector('.theme-switch') as HTMLButtonElement).click();
    expect(theme.theme()).not.toBe(antes);
  });

  it('muestra el total de objetos de Halloween', async () => {
    const halloween = TestBed.inject(HalloweenService);
    halloween.agregar({
      imagen: 'https://img.test/a.png',
      objeto: 'Calabaza',
      descripcion: 'Una calabaza muy grande',
      propietario: 'Ana'
    });
    const fixture = TestBed.createComponent(NavBarComponent);
    await fixture.whenStable();
    const enlaces = fixture.nativeElement.querySelectorAll('nav a');
    expect(enlaces[2].textContent).toContain('Halloween (1)');
  });
});