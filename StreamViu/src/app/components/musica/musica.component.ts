import { CancionService } from './../../services/cancion.service';
import { CancionComponent } from './../cancion/cancion.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Disco } from '../../models/disco';
import { Cancion } from '../../models/cancion';
import {DiscoService} from '../../services/disco.services';

@Component({
  selector: 'app-musica',
  imports: [CommonModule,CancionComponent],
  templateUrl: './musica.component.html',
  styleUrl: './musica.component.css',
  providers:[DiscoService,CancionService]
})
export class MusicaComponent {
  public records: Array<any>;
  public playing :string;

  constructor(
    private discoService: DiscoService,
    private cancionservice: CancionService
  ) {
    this.playing="";
    this.records = [];
    // console.log(this.discoService.test());
    this.discoService.getDiscs().subscribe({
      next: (info) => {
        this.records = info.data;

        for(let i=0;i<this.records.length;i++){
          this.cancionservice.getSongsById(this.records[i].id).subscribe({
            next:(info2)=>{
              this.records[i].songs=info2.data
            },
            error:(error2)=>console.log("Error2: ",error2)
        })
        }
        console.log("Recibido: ",info)
      },
      error:(error)=>console.log("Error: ",error)
    })
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
