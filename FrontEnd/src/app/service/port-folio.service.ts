import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortFolioService {
  //private EducURL = "http://localhost:8080/educacion"

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get<any>('./assets/data/data.json'); //(this.URL + 'persona/');
  }                                                       //(this.URL)
}                                                           