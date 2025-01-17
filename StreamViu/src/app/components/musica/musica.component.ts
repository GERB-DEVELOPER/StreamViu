import { CancionComponent } from './../cancion/cancion.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Disco } from '../../models/disco';
import { Cancion } from '../../models/cancion';
@Component({
  selector: 'app-musica',
  imports: [CommonModule,CancionComponent],
  templateUrl: './musica.component.html',
  styleUrl: './musica.component.css',
})
export class MusicaComponent {
  public records: Array<any>;
  public playing :string;

  constructor() {
    this.playing="";
    this.records = [
      new Disco(
        1,
        'Cuando Pienses en Volver',
        'Pedro Suárez-Vértiz',
        2013,
        'https://e.rpp-noticias.io/xlarge/2024/01/19/242124_1527114.webp',
        [
          new Cancion(
            1,
            1,
            'Lo Olvide',
            'Pedro Suárez-Vértiz',
            'https://cdn.freesound.org/previews/785/785381_1015240-lq.mp3',
            1
          ),
          new Cancion(
            2,
            2,
            'No Pensé Que Era Amor',
            'Pedro Suárez-Vértiz',
            'https://cdn.freesound.org/previews/785/785379_1391542-lq.mp3',
            1
          ),
          new Cancion(
            3,
            3,
            'Cuentame',
            'Pedro Suárez-Vértiz',
            'https://cdn.freesound.org/previews/785/785374_1648170-lq.mp3',
            1
          ),
          new Cancion(
            4,
            4,
            'Como te va mi amor',
            'Pedro Suárez-Vértiz',
            'https://cdn.freesound.org/previews/785/785372_12880153-lq.mp3',
            1
          ),
          new Cancion(
            5,
            5,
            'Degeneración Actual',
            'Pedro Suárez-Vértiz',
            'https://cdn.freesound.org/previews/784/784487_16754166-lq.mp3',
            1
          ),
          new Cancion(
            6,
            6,
            'Me Estoy Enamorando',
            'Pedro Suárez-Vértiz',
            'https://cdn.freesound.org/previews/784/784644_14772488-lq.mp3',
            1
          ),
        ]
      ),
      new Disco(
        2,
        'La Voz del Pueblo',
        'Chacalón',
        1978,
        'https://lastfm.freetls.fastly.net/i/u/ar0/df8f71cb243e156b82945be8a42b0105.jpg',
        [
          new Cancion(
            7,
            1,
            'Ese Amargo Amor',
            'Chacalón',
            'https://cdn.freesound.org/previews/785/785381_1015240-lq.mp3',
            2
          ),
          new Cancion(
            8,
            2,
            'Viento',
            'Chacalón',
            'https://cdn.freesound.org/previews/784/784644_14772488-lq.mp3',
            2
          ),
          new Cancion(
            9,
            3,
            'Mi Dolor.',
            'Chacalón',
            'https://cdn.freesound.org/previews/784/784644_14772488-lq.mp3',
            2
          ),
        ]
      ),
      new Disco(
        3,
        'Vida o Muerte',
        'Canservero',
        1997,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmZHONHfwwQM2jSopU0_X271Sr2hwl9PzpZw&s',
        [
          new Cancion(
            10,
            1,
            'Es Épico',
            'Canservero',
            'https://cdn.freesound.org/previews/785/785381_1015240-lq.mp3',
            3
          ),
          new Cancion(
            11,
            2,
            'Jeremías 17-5',
            'Canservero',
            'https://cdn.freesound.org/previews/784/784644_14772488-lq.mp3',
            3
          ),
          new Cancion(
            12,
            3,
            'Stupid Love Story',
            'Canservero',
            'https://cdn.freesound.org/previews/784/784644_14772488-lq.mp3',
            3
          ),
        ]
      ),

      new Disco(
        4,
        'Si te entregas a Mi',
        'Frankie Ruiz',
        2001,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZr95F4rYhuXVKzFbSvf6yjDFW5Wx9WhDQbg&s',
        [
          new Cancion(
            13,
            1,
            'y NO PUEDO',
            'Frankie Ruiz',
            'https://cdn.freesound.org/previews/785/785381_1015240-lq.mp3',
            4
          ),
          new Cancion(
            14,
            2,
            'Si te entregas a Mi',
            'Frankie Ruiz',
            'https://cdn.freesound.org/previews/784/784644_14772488-lq.mp3',
            4
          ),
          new Cancion(
            15,
            3,
            'ESA COBARDIA',
            'Frankie Ruiz',
            'https://cdn.freesound.org/previews/784/784644_14772488-lq.mp3',
            4
          ),
        ]
      ),

      new Disco(
        5,
        'Mi Favoritos',
        'Grupo Niche',
        2010,
        'https://resources.tidal.com/images/1cdb6283/8c47/4148/8a48/2459d369336f/640x640.jpg',
        [
          new Cancion(
            16,
            1,
            'Cali Pachanguero',
            'Grupo Niche',
            'https://cdn.freesound.org/previews/785/785381_1015240-lq.mp3',
            5
          ),
          new Cancion(
            17,
            2,
            ' Ana Milé',
            'Grupo Niche',
            'https://cdn.freesound.org/previews/784/784644_14772488-lq.mp3',
            5
          ),
          new Cancion(
            18,
            3,
            ' Ni como amiga ni como amante',
            'Grupo Niche',
            'https://cdn.freesound.org/previews/784/784644_14772488-lq.mp3',
            5
          ),
        ]
      ),

      new Disco(
        6,
        'BONEY M MAGIC.',
        'BONEY M.',
        1973,
        'https://www.theconcordeclub.com/shopimages/Boney%20m.jpg',
        [
          new Cancion(
            19,
            1,
            'Rasputin',
            'BONEY M.',
            'https://cdn.freesound.org/previews/785/785381_1015240-lq.mp3',
            6
          ),
          new Cancion(
            20,
            2,
            'Rivers of Babylon',
            'BONEY M.',
            'https://cdn.freesound.org/previews/784/784644_14772488-lq.mp3',
            6
          ),
          new Cancion(
            21,
            3,
            'Ma Baker.',
            'BONEY M.',
            'https://cdn.freesound.org/previews/784/784644_14772488-lq.mp3',
            6
          ),
        ]
      ),
    ];
  }

reproducirCancion(song:Cancion):void{
console.log("-----------");
this.playing=song.artist+" . " + song.title;
let audioplayer=document.getElementById("audio_player") as HTMLAudioElement;
audioplayer?.setAttribute('src',song.path);
audioplayer.play();
}
// //////////////////////////
}
