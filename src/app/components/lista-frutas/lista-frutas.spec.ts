import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaFrutasComponent } from './lista-frutas';

describe('ListaFrutasComponent', () => {
  let fixture: ComponentFixture<ListaFrutasComponent>;
  let component: ListaFrutasComponent;

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

  it('muestra las frutas iniciales', () => {
    expect(fixture.nativeElement.querySelectorAll('.item-fruta').length).toBe(3);
  });

  it('añade frutas con id único', () => {
    component.incorporarFruta();
    component.incorporarFruta();
    const ids = component.inventarioFrutas().map((fruta) => fruta.id);
    expect(ids.length).toBe(5);
    expect(new Set(ids).size).toBe(5);
  });

  it('alterna el me gusta', () => {
    const antes = component.inventarioFrutas()[0].like;
    component.alternarLike(1);
    expect(component.inventarioFrutas()[0].like).toBe(!antes);
  });
});