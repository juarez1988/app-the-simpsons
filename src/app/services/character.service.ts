import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  public url: string;

  constructor(private _http: HttpClient) { 
    this.url = 'https://apisimpsons.fly.dev/api/personajes?limit=636';
  }

  getCharacters():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url, {headers: headers});
  }

}
