import { Injectable } from "@angular/core";
import { Disco } from "../models/disco";
import { Cancion } from "../models/cancion";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export var urlRecord="https://apiviu.amnislabs.com/pro/api/";
@Injectable()
export class DiscoService{

  constructor(
    private http: HttpClient
  ){



  }

  public getDiscs():Observable<any>{

    return this.http.get(urlRecord+"discs");
  }
  // ////////////
  }


