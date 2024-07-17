import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {
  @Input()
  nome: string = " nome";

  @Input()
  autor: string = "autor";

  @Input()
  tamanho: string = "tamanho";

  @Input()
  texto: string = "texto";

  @Input()
  categoria: string = "categoria";

  constructor() { }

  ngOnInit(): void {}

}
