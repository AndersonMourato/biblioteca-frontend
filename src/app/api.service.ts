import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllLivros(){    
    this.http.get("http://localhost:8080/livro/todos").subscribe(data =>{
    console.log(data)
    })

  /*
    fetch('http://localhost:8080/livro/todos')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Utilize os dados aqui
    })
    .catch(error => {
      console.error('Erro ao fazer a requisição:', error);
    });
  */
  }
}
