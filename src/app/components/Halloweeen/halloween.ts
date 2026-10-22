import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-halloween',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './halloween.html',
  styleUrls: ['./halloween.css']
})
export class HalloweenComponent {
  objetosHalloween: string[] = [];

  formularioHalloween = new FormGroup({
    nombre: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
    }),
    objeto: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
    })
  });

  get nombre(): FormControl<string> {
    return this.formularioHalloween.get('nombre') as FormControl<string>;
  }

  get objeto(): FormControl<string> {
    return this.formularioHalloween.get('objeto') as FormControl<string>;
  }

  enviar(): void {
    if (this.formularioHalloween.valid) {
      const nuevoObjeto = this.formularioHalloween.value.objeto?.trim();
      if (nuevoObjeto) {
        this.objetosHalloween.push(nuevoObjeto);
        this.formularioHalloween.reset();
      }
    }
  }
}