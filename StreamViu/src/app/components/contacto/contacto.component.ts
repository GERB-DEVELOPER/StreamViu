import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  public solicitud: any;

  constructor() {
    this.solicitud = {
      nombre: '',
      correo: '',
      valoracion: '',
      consulta: ''
    };
  }

  public onSubmit() {
    alert("Formulario enviado");
    console.log(this.solicitud);
  }
}
