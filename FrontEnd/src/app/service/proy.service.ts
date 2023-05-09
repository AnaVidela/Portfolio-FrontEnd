import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../clases/proyectos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyService {
  private apiURL = 'http://localhost:8080/proyectos/'

  constructor(private httpClient:HttpClient) { }

  //Proyectos

public listaproy():Observable<Proyectos[]> {
  return this.httpClient.get<Proyectos[]>(this.apiURL+'ver');
}

public editProy(id:number, proy:Proyectos): Observable<any>{
return this.httpClient.put<any>(this.apiURL+`editar/${id}`,proy);
}

public agregarProy(proy: Proyectos): Observable<any> {
  return this.httpClient.post<any>(this.apiURL+'new', proy);
}

public borrarProy(id:number): Observable<any>{
  return this.httpClient.delete<any>(this.apiURL+`delete/${id}`);
}

public detalleProy(id: number): Observable<Proyectos>{
  return this.httpClient.get<Proyectos>(this.apiURL+`detail/${id}`);
}
}
