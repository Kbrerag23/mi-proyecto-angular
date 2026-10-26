import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TarjetaHalloweenComponent } from './tarjeta-halloween/tarjeta-halloween.component';

export interface ObjetoHalloween {
  imagen: string;
  objeto: string;
  descripcion: string;
  propietario: string;
}

@Component({
  selector: 'app-halloween',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, TarjetaHalloweenComponent],
  templateUrl: './halloween.html',
  styleUrls: ['./halloween.css']
})
export class HalloweenComponent {
  objetosHalloween: ObjetoHalloween[] = [];

  formularioHalloween = new FormGroup({
    imagen: new FormControl('', [Validators.required]),
    objeto: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    descripcion: new FormControl('', [Validators.required, Validators.minLength(10)]),
    propietario: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)])
  });

  enviar(): void {
    if (this.formularioHalloween.valid) {
      const nuevoObjeto: ObjetoHalloween = {
        imagen: this.formularioHalloween.value.imagen!,
        objeto: this.formularioHalloween.value.objeto!,
        descripcion: this.formularioHalloween.value.descripcion!,
        propietario: this.formularioHalloween.value.propietario!
      };
      
      this.objetosHalloween.push(nuevoObjeto);
      this.formularioHalloween.reset();
    }
  }

  eliminarObjeto(objetoAEliminar: ObjetoHalloween): void {
    this.objetosHalloween = this.objetosHalloween.filter(item => item !== objetoAEliminar);
  }
}