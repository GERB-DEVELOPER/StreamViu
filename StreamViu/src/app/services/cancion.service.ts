import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { urlRecord } from "./disco.services";
import { Observable } from "rxjs";
@Injectable()
export class CancionService {
  constructor(private http: HttpClient) {
  }

  public getSongsById(id: number): Observable<any> {
    return this.http.get(urlRecord + `songs/from_disc/`+id);
  }
  // ////////////
}
