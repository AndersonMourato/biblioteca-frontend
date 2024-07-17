import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  @Input()
  public nome: string = "";
  @Input()
  public descricao: string = "";

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  search(){
    this.route.navigate(["livros"], {queryParams: {search: this.nome}});
  }

}
