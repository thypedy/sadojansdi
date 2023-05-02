import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  listaFilmes: IFilme[] = [
    {
    nome: 'Stranger Things (2016 ~ 2022)',
      lancamento: 'último lançamento 17/02/2022',
      duracao: '1 hora em média',
      classificacao: 8,
      cartaz: 'https://midias.correiobraziliense.com.br/_midias/jpg/2022/05/13/675x450/1_stranger_things-7972135.jpg?20220513213121?20220513213121',
      generos: ['Ficção científica', 'Terror', 'Suspense'],
      pagina: '/stranger-things',
      favorito: false
    },
    {
      nome: 'The Witcher (2019 ~ 2022)',
        lancamento: 'último lançamento 29/06/2022',
        duracao: '1h6min em média',
        classificacao: 8,
        cartaz: 'https://br.web.img2.acsta.net/c_310_420/pictures/19/11/29/17/57/5161763.jpg',
        generos: ['Aventura', 'Fantasia', 'Drama'],
        pagina: '/the-witcher',
        favorito: false
    },
    {
      nome: 'Friends (1994 ~ 2004)',
        lancamento: 'último lançamento 06/05/2004',
        duracao: '22 horas em média',
        classificacao: 9,
        cartaz: 'https://cinema10.com.br/upload/series/series_5_MV5BZTczMjRjNDItNmFhOS00NmU3LTllMTAtMTk1ZWU0NWJmNzUxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,701,1000_AL_.jpg',
        generos: ['Sitcom', 'Comédia', 'Romance'],
        pagina: '/friends',
        favorito: false
    },
    ]
}
