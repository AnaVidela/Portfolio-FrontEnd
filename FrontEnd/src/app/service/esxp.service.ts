import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../clases/experiencia';

@Injectable({
  providedIn: 'root'
})
export class EsxpService {

  private apiURL = 'http://localhost:8080/experiencia/'

  constructor(private httpClient:HttpClient) { }

  //Experiencia

public listaexp():Observable<Experiencia[]> {
  return this.httpClient.get<Experiencia[]>(this.apiURL+'ver');
}

public editExperiencia(id:number): Observable<any>{
return this.httpClient.put<any>(this.apiURL+`editar/${id}`,{})
} 
public agregarExperiencia(exp: Experiencia): Observable<any> {
  return this.httpClient.post<any>(this.apiURL+'new', exp)
}

public borrarExperiencia(id:number): Observable<any>{
  return this.httpClient.delete<any>(this.apiURL+`delete/${id}`)
}

}
