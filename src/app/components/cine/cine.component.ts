import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Pelicula {
  titulo: string;
  anio: number;
  genero: string;
  sinopsis: string;
  color: string;
  icono: string;
}

@Component({
  selector: 'app-cine',
  imports: [CommonModule, RouterLink],
  templateUrl: './cine.component.html',
  styleUrl: './cine.component.css'
})
export class CineComponent implements OnInit {

  public generoActivo: string = 'todos';

  public generos = [
    { id: 'todos',   label: 'Todos' },
    { id: 'accion',  label: 'Acción' },
    { id: 'drama',   label: 'Drama' },
    { id: 'comedia', label: 'Comedia' },
    { id: 'terror',  label: 'Terror' },
    { id: 'scifi',   label: 'Sci-Fi' },
  ];

  public peliculas: Pelicula[] = [
    { titulo: 'Interstellar',         anio: 2014, genero: 'scifi',   sinopsis: 'Un equipo de exploradores viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.', color: '#1e3a5f', icono: '🚀' },
    { titulo: 'El Padrino',           anio: 1972, genero: 'drama',   sinopsis: 'La historia del patriarca de la familia Corleone y su hijo que se convierte en jefe de la mafia.', color: '#3b1f1f', icono: '🎩' },
    { titulo: 'Avengers: Endgame',    anio: 2019, genero: 'accion',  sinopsis: 'Los Vengadores reunidos en una última batalla para revertir el daño causado por Thanos.', color: '#1a1a3e', icono: '⚡' },
    { titulo: 'It',                   anio: 2017, genero: 'terror',  sinopsis: 'Un grupo de niños se enfrenta a su mayor miedo cuando un payaso aterrador aparece en su pueblo.', color: '#1f0a0a', icono: '🤡' },
    { titulo: 'The Grand Budapest Hotel', anio: 2014, genero: 'comedia', sinopsis: 'Las aventuras de un legendario conserje de hotel europeo y su amigo botones.', color: '#4a1942', icono: '🏨' },
    { titulo: 'Dune',                 anio: 2021, genero: 'scifi',   sinopsis: 'Un joven noble lidera tribus del desierto en un planeta desértico con el recurso más valioso del universo.', color: '#3d2b00', icono: '🏜️' },
    { titulo: 'Joker',                anio: 2019, genero: 'drama',   sinopsis: 'El origen del icónico villano de Gotham, un hombre ignorado por la sociedad que desciende a la locura.', color: '#1a0a2e', icono: '🃏' },
    { titulo: 'John Wick',            anio: 2014, genero: 'accion',  sinopsis: 'Un ex asesino a sueldo regresa para vengarse de los gángsters que le robaron todo.', color: '#0a1a0a', icono: '🔫' },
    { titulo: 'Hereditary',           anio: 2018, genero: 'terror',  sinopsis: 'Una familia descubre secretos oscuros sobre su historia tras la muerte de la abuela.', color: '#0f0f1a', icono: '👁️' },
    { titulo: 'Superbad',             anio: 2007, genero: 'comedia', sinopsis: 'Dos amigos inseparables viven una noche épica antes de graduarse del instituto.', color: '#1a2a0a', icono: '😂' },
    { titulo: 'Oppenheimer',          anio: 2023, genero: 'drama',   sinopsis: 'La historia del físico que lideró el Proyecto Manhattan y creó la primera bomba atómica.', color: '#2a1a00', icono: '💣' },
    { titulo: 'Mad Max: Fury Road',   anio: 2015, genero: 'accion',  sinopsis: 'En un mundo post-apocalíptico, Max se une a una rebelde para escapar de un tirano del desierto.', color: '#3a1500', icono: '🚗' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.generoActivo = params['genero'] ?? 'todos';
    });
  }

  get peliculasFiltradas(): Pelicula[] {
    if (this.generoActivo === 'todos') return this.peliculas;
    return this.peliculas.filter(p => p.genero === this.generoActivo);
  }
}
