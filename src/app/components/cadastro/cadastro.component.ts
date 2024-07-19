import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';
import { Livro } from 'src/app/models/Livro';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {

  produto = {
    nome: ''
  }

  @Input()
  teste = ""

  public categoria: Categoria | undefined;

  constructor() { 

  }

  ngOnInit(): void {
  }

  sendForm(){
    console.log("FOI: "+ this.teste )

  }

}
