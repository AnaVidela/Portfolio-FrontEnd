import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../clases/persona';

@Injectable({
  providedIn: 'root'
})
export class PortFolioService {
  private apiURL = 'http://localhost:8080/persona/'

  constructor(private httpClient:HttpClient) { }

  public listaPersona():Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.apiURL+'ver');
  }

  public editPersona(id:number, per: Persona): Observable<any>{
  return this.httpClient.put<any>(this.apiURL+`editar/${id}`,per)
 }

 public detallePersona(id:number): Observable<Persona> {
  return this.httpClient.get<Persona>(this.apiURL+`detail/${id}`);
}
}                                                           