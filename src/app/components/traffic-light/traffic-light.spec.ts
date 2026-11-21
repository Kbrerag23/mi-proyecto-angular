import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrafficLightComponent } from './traffic-light';

describe('TrafficLightComponent', () => {
  let fixture: ComponentFixture<TrafficLightComponent>;
  let component: TrafficLightComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrafficLightComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TrafficLightComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('empieza en rojo', () => {
    expect(component.activeLight()).toBe('red');
  });

  it('dibuja seis semáforos de tres luces', () => {
    expect(fixture.nativeElement.querySelectorAll('.traffic-light').length).toBe(6);
    expect(fixture.nativeElement.querySelectorAll('.light').length).toBe(18);
  });

  it('cambia de luz en ciclo', () => {
    component.nextLight();
    expect(component.activeLight()).toBe('green');
    component.nextLight();
    expect(component.activeLight()).toBe('yellow');
    component.nextLight();
    expect(component.activeLight()).toBe('red');
  });

  it('elige una luz concreta', () => {
    component.setLight('yellow');
    expect(component.activeLight()).toBe('yellow');
  });

  it('activa y detiene el modo automático', () => {
    component.toggleAuto();
    expect(component.isAuto()).toBe(true);
    component.toggleAuto();
    expect(component.isAuto()).toBe(false);
  });
});