import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  public titulo:string;
  public pulsaciones: number;

  constructor(){
    this.titulo="Universidad Internacional de Valencia y Paris";
    this.pulsaciones=0;
   
  }
  pulsar():void{
    this.pulsaciones++;
  }
  resetPulsaciones():void{
    this.pulsaciones=0;
  }
}
