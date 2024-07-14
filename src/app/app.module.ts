import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsComponent } from './components/tabs/tabs.component';
import { HeaderComponent } from './components/header/header.component';
import { LivroComponent } from './components/livro/livro.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    HeaderComponent,
    LivroComponent,
    CategoriaComponent,
    CadastroComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
