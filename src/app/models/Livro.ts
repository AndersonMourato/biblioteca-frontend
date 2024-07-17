import { Categoria } from "../models/Categoria";

export interface Livro{
    id: number;
    nome: string;
    autor: string;
    texto: string;
    tamanho: string;
    categoria: Categoria;
}