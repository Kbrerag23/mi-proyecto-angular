import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaFrutasComponent } from './lista-frutas';

describe('ListaFrutasComponent', () => {
  let component: ListaFrutasComponent;
  let fixture: ComponentFixture<ListaFrutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaFrutasComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaFrutasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

// Test para verificar que se añade una fruta al inventario
  it('añade una fruta', () => {
    component.incorporarFruta();
    expect(component.inventarioFrutas().length).toBe(4);
  });
});