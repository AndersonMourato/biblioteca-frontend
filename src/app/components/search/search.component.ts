import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Categoria } from 'src/app/models/Categoria';
import { Livro } from 'src/app/models/Livro';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public search: string = ""
  public searchContent: Livro[] | Categoria[] = [];
  private isLoading: boolean = false;
  
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  startSearch(){
    if(this.search){
      this.route.navigate(["livros"], {queryParams: {search: this.search}});
    }else{
      this.route.navigate(["livros"]);
    }
  }

}
