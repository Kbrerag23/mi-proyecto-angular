import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PouClickerComponent } from './pou-clicker';

describe('PouClickerComponent', () => {
  let component: PouClickerComponent;
  let fixture: ComponentFixture<PouClickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PouClickerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PouClickerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });
   
  // Test para verificar que el componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});