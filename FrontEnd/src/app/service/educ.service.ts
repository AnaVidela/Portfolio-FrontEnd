import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../clases/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducService {

  private apiURL = 'https://portfolioanalia.onrender.com/educacion/'

  constructor(private httpClient:HttpClient) { }

  

public listaeduc():Observable<Educacion[]> {
  return this.httpClient.get<Educacion[]>(this.apiURL+'ver');
}

 public editEducacion(id:number, educ:Educacion): Observable<any>{
return this.httpClient.put<any>(this.apiURL+`editar/${id}`,educ)
} 

public agregarEducacion(educ: Educacion): Observable<any> {
  return this.httpClient.post<any>(this.apiURL+'new', educ)
}

public borrarEducacion(id:number): Observable<any>{
  return this.httpClient.delete<any>(this.apiURL+`delete/${id}`)
}

public detalleEducacion(id:number): Observable<Educacion> {
  return this.httpClient.get<Educacion>(this.apiURL+`detail/${id}`);
}

}
