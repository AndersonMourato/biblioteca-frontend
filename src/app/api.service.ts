import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from './models/Livro';
import { Categoria } from './models/Categoria';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string;
  private livros: Livro[] | undefined;

  constructor(private http: HttpClient) { 
    this.baseUrl = "http://localhost:8080/";
  }

 
  public getAllLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${this.baseUrl}livro/todos`);
  }

  public getAllCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.baseUrl}categoria`);
  }



}

