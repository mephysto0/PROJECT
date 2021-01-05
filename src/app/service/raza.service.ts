import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RazaService {
  _url = 'https://dog.ceo/api/breeds/list/all'
  constructor(
    private http: HttpClient
    ){
    console.log('servicio raza')
  }
  getRaza() {
    let header = new HttpHeaders();

    header.append('Type-content','aplication/json');


    return this.http.get(this._url,{headers: header});
  }

}
