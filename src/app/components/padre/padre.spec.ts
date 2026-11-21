import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PadreComponent } from './padre';

describe('PadreComponent', () => {
  let fixture: ComponentFixture<PadreComponent>;
  let component: PadreComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadreComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PadreComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('muestra cinco hijos', () => {
    expect(fixture.nativeElement.querySelectorAll('app-hijo').length).toBe(5);
  });

  it('recibe el mensaje de un hijo', async () => {
    (fixture.nativeElement.querySelector('app-hijo button') as HTMLButtonElement).click();
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('.respuesta-box').textContent).toContain('Hola Papa');
  });
});