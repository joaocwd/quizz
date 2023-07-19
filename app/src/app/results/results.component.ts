import { Component } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  quiz = [
    {id: 1, name: 'Desafio do Conhecimento',tries: 3, img: 'https://4.bp.blogspot.com/-wpGcMwMGFHQ/V6ZtydFbufI/AAAAAAAADHk/4hELqSh4eYIUb1tqvi_VUN4f782BUSVgwCLcB/s2560/amazing_landscape-wallpaper-1920x1080.jpg', nota: 7.65},
    {id: 2, name: 'Mente Brilhante', tries: 3, img: 'https://th.bing.com/th/id/OIP.rrCUbLM4C4qNFOqrZB9hxwAAAA?pid=ImgDet&rs=1', nota: 8},
  ]
}
