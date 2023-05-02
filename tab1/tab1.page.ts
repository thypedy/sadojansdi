import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
    {  
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/avengers',
      favorito: false
    },
    {
      nome: 'Super Mario Bros. O Filme (2023)',
      lancamento: '06/04/2023 (BR)',
      duracao: '1h32m',
      classificacao: 8,
      cartaz: 'https://portalpopline.com.br/wp-content/uploads/2023/04/mario-bros.jpg',
      generos: ['Animação', 'Fantasia', 'Comédia'],
      pagina: '/mario-bros',
      favorito: false
    },
    {
      nome: 'Up: Altas Aventuras (2009)',
      lancamento: '04/09/2009 (BR)',
      duracao: '1h36m',
      classificacao: 9,
      cartaz: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6CqYQmnDcPqpc1g_x6YYWLqAotS_3hKBBOA&usqp=CAU',
      generos: ['Infantil', 'Aventura', 'Comédia dramática'],
      pagina: '/up',
      favorito: false
    },
    {
      nome: 'WiFi Ralph: Quebrando a Internet (2019)',
      lancamento: '03/01/2019 (BR)',
      duracao: '1h52m',
      classificacao: 7,
      cartaz: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ca7fc772eeb7c0f76d0220617150fd438f03c93387ec31bfff91ba18465d9187._RI_V_TTW_.jpg',
      generos: ['Infantil', 'Animação', 'Comédia'],
      pagina: '/detona-ralph',
      favorito: false
    }
  ];

}
