import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MusicaComponent } from './musica/musica.component';
import { CineComponent } from './cine/cine.component';
import { LibrosComponent } from './libros/libros.component';
import { PostcastsComponent } from './postcasts/postcasts.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [

{path: '',component:InicioComponent},
{path: 'inicio',component:InicioComponent},
{path: 'musica',component:MusicaComponent},
{path: 'cine',component:CineComponent},
{path: 'cine/:genero',component:CineComponent},
{path: 'libros',component:LibrosComponent},
{path: 'postcasts',component:PostcastsComponent},
{path: 'contacto',component:ContactoComponent},
{path: '**',component:ErrorComponent}
];

