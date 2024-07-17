import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Livro } from "../../models/Livro";
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Categoria } from 'src/app/models/Categoria';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  public livros:Livro[] = [];
  public categorias:Categoria[] = [];

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) {
  }
  
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const search = params.get("search");
      if(search){
        this.livros = this.livros.filter(item => 
          item.nome.toLowerCase().includes(search.toLowerCase()) || 
          item.categoria.nome.toLowerCase().includes(search.toLowerCase()) || 
          item.id == parseInt(search));
      }else{
        this.getAllLivros();
        this.getAllCategorias();
      }
    });
  }

  private getAllLivros(): void {
    this.apiService.getAllLivros().subscribe(
      data => {
        this.livros = data;
      },
      error => {
        console.error('Erro ao carregar os livros:', error);
      }
    );
  }

  private getAllCategorias(): void {
    this.apiService.getAllCategorias().subscribe(
      data => {
        this.categorias = data;
      },
      error => {
        console.error('Erro ao carregar as categorias:', error);
      }
    );
  }

}
