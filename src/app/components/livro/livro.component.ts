import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {

    this.apiService.getAllLivros();
  }

}
