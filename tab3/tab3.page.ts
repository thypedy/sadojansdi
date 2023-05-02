import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Raphael Rossatto',
      lancamento: 'Dublador Mario',
      duracao: '',
      classificacao: 0,
      cartaz: 'https://br.web.img3.acsta.net/pictures/23/03/30/18/57/4427868.jpg',
      generos: [''],
      pagina: '/mario-bros',
      favorito: false
    },
    {
      nome: 'Manolo Rey',
      lancamento: 'Dublador Luigi',
      duracao: '',
      classificacao: 0,
      cartaz: 'https://cdn.ome.lt/dwytnzEqx7SFyJfX1hAYKfZ6AqM=/770x0/smart/uploads/conteudo/fotos/Manolo_Rey.jpg',
      generos: [''],
      pagina: '/mario-bros',
      favorito: false
    },
    {
      nome: 'Carina Eiras',
      lancamento: 'Dublador Princesa Peach',
      duracao: '',
      classificacao: 0,
      cartaz: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZpJYGEhqsHr3OzDXX7iJIufoa5ynexQliLvr6S3tqgRaLuvF0KjKQf9rOOizmc09kpUI&usqp=CAU',
      generos: [''],
      pagina: '/mario-bros',
      favorito: false
    }
  ]
}
