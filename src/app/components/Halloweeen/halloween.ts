import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TarjetaHalloweenComponent } from './tarjeta-halloween/tarjeta-halloween.component';
import { HalloweenService } from '../../services/halloween.service';
import { ObjetoHalloween } from '../../models/objeto-halloween';

@Component({
  selector: 'app-halloween',
  standalone: true,
  imports: [ReactiveFormsModule, TarjetaHalloweenComponent],
  templateUrl: './halloween.html',
  styleUrls: ['./halloween.css']
})
export class HalloweenComponent {
  private readonly halloweenService = inject(HalloweenService);

  readonly objetosHalloween = this.halloweenService.objetos;

  formularioHalloween = new FormGroup({
    imagen: new FormControl('', [Validators.required]),
    objeto: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    descripcion: new FormControl('', [Validators.required, Validators.minLength(10)]),
    propietario: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)])
  });

  enviar(): void {
    if (this.formularioHalloween.valid) {
      const valores = this.formularioHalloween.value;
      this.halloweenService.agregar({
        imagen: valores.imagen!,
        objeto: valores.objeto!,
        descripcion: valores.descripcion!,
        propietario: valores.propietario!
      });
      this.formularioHalloween.reset();
    }
  }

  eliminarObjeto(objeto: ObjetoHalloween): void {
    this.halloweenService.eliminar(objeto);
  }
}