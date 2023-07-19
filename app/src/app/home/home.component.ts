import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  quiz = [
    {id: 1, name: 'Desafio do Conhecimento', img: 'https://4.bp.blogspot.com/-wpGcMwMGFHQ/V6ZtydFbufI/AAAAAAAADHk/4hELqSh4eYIUb1tqvi_VUN4f782BUSVgwCLcB/s2560/amazing_landscape-wallpaper-1920x1080.jpg', people: 13},
    {id: 2, name: 'Mente Brilhante', img: 'https://th.bing.com/th/id/OIP.rrCUbLM4C4qNFOqrZB9hxwAAAA?pid=ImgDet&rs=1', people: 12},
    {id: 3, name: 'Teste de Sabedoria', img: 'https://th.bing.com/th/id/R.a0ac69d10d323df11fcd2a9172bb96aa?rik=DOTPlVJycX0BDA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-emb0bgUXJYA%2fTyiYw-f2RjI%2fAAAAAAAAMjk%2fHlbWKT_ePsA%2fs1600%2fwallpaper-fundos-para-pc-papel-de-parede%2b(18).jpg&ehk=NjlqEUx9SV8VuXkZy9QZcsoAZ8OaGCQi4GXba8f0uCQ%3d&risl=&pid=ImgRaw&r=0', people: 30},
    {id: 4, name: 'Desafio do Conhecimento Geral', img: 'https://i.pinimg.com/originals/ba/68/e2/ba68e2c4c9efebbd6650976b3173a2a4.png', people: 20},
    {id: 1, name: 'Desafio do Conhecimento', img: 'https://4.bp.blogspot.com/-wpGcMwMGFHQ/V6ZtydFbufI/AAAAAAAADHk/4hELqSh4eYIUb1tqvi_VUN4f782BUSVgwCLcB/s2560/amazing_landscape-wallpaper-1920x1080.jpg', people: 13},
    {id: 2, name: 'Mente Brilhante', img: 'https://th.bing.com/th/id/OIP.rrCUbLM4C4qNFOqrZB9hxwAAAA?pid=ImgDet&rs=1', people: 12},
  ]

}
