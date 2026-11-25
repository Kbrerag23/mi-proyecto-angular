import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HijoComponent } from './hijo';

describe('HijoComponent', () => {
  let component: HijoComponent;
  let fixture: ComponentFixture<HijoComponent>;

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
});