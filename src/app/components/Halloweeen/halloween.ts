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
  //asi no ahce falta un constructor, injectas el servicio y ya
  private readonly halloweenService = inject(HalloweenService);

  readonly objetosHalloween = this.halloweenService.objetos;

  //form con los validators para que salten los errores si no se cumplen
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
        // el ! es para q typeScript sepa q no es null y confie
        imagen: valores.imagen!,
        objeto: valores.objeto!,
        descripcion: valores.descripcion!,
        propietario: valores.propietario!
      });
      // hace q el form se resetee
      this.formularioHalloween.reset();
    }
  }

  eliminarObjeto(objeto: ObjetoHalloween): void {
    this.halloweenService.eliminar(objeto);
  }
}