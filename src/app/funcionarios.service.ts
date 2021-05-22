import { Injectable } from '@angular/core';
import {HttpClient} from '@Angular/common/http';
import { Funcionario} from './funcionarios/funcionario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  constructor(private http: HttpClient) {

   }

   salvar(funcionario: Funcionario) : Observable<any>{
    return this.http.post<Funcionario>('http://localhost:8080/funcionario',funcionario);
   }

   atualizar(funcionario: Funcionario) : Observable<Funcionario>{
    return this.http.put<Funcionario>(`http://localhost:8080/funcionario/${funcionario.id}`, funcionario);
   }

   getFuncionarios(): Observable<any[]>{
     return this.http.get<Funcionario[]>('http://localhost:8080/funcionario');
   }

   getFuncionarioById(id: number) : Observable<Funcionario>{
    return this.http.get<Funcionario>(`http://localhost:8080/funcionario/${id}`);

   }

   deletar(funcionario: Funcionario): Observable<any>{
     return this.http.delete<any>(`http://localhost:8080/funcionario/${funcionario.id}`);
   }
  

}
