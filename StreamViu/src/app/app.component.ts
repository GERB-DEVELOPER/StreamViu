import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MusicaComponent } from './musica/musica.component';
import { CineComponent } from './cine/cine.component';
import { LibrosComponent } from './libros/libros.component';
import { PostcastsComponent } from './postcasts/postcasts.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ErrorComponent } from './error/error.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { CabeceraComponent } from './cabecera/cabecera.component'; 
import { PieComponent } from './pie/pie.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    RouterOutlet,
    InicioComponent,
    MusicaComponent,
    CineComponent,
    LibrosComponent,
    PostcastsComponent,
    ContactoComponent,
    ErrorComponent,
    NavegacionComponent,
    CabeceraComponent,
    PieComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StreamViu';
}
