import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { MusicaComponent } from './components/musica/musica.component';
import { CineComponent } from './components/cine/cine.component';
import { LibrosComponent } from './components/libros/libros.component';
import { PostcastsComponent } from './components/postcasts/postcasts.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ErrorComponent } from './components/error/error.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component'; 
import { PieComponent } from './components/pie/pie.component';

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
