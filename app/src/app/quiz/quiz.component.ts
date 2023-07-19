import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  screen = 0
  nota = 8
  acertos = 8
  totalQuestao = 10

  questions = [
    {
      "id": 1,
      "title": "Qual é a capital do Brasil?",
      "text": "Esta cidade foi construída especialmente para ser a capital do país e é famosa por sua arquitetura modernista.",
      "alternatives": [
        { "text": "Rio de Janeiro" },
        { "text": "Brasília" },
        { "text": "São Paulo" },
        { "text": "Salvador" }
      ]
    },
    {
      "id": 2,
      "title": "Qual é o maior planeta do Sistema Solar?",
      "text": "Este planeta é conhecido por sua grande mancha vermelha, que é uma tempestade gigante que ocorre há séculos.",
      "alternatives": [
        { "text": "Marte" },
        { "text": "Vênus" },
        { "text": "Júpiter" },
        { "text": "Saturno" }
      ]
    },
    {
      "id": 3,
      "title": "Quem pintou a Mona Lisa?",
      "text": "Esta famosa obra de arte é exibida no Museu do Louvre, em Paris, e é considerada uma das pinturas mais famosas do mundo.",
      "alternatives": [
        { "text": "Pablo Picasso" },
        { "text": "Leonardo da Vinci" },
        { "text": "Vincent van Gogh" },
        { "text": "Salvador Dalí" }
      ]
    },
    // {
    //   "id": 4,
    //   "title": "Qual é o maior rio do mundo?",
    //   "text": "Este rio é conhecido por ser o mais longo do mundo, atravessando vários países e desaguando no Oceano Atlântico.",
    //   "alternatives": [
    //     { "text": "Nilo" },
    //     { "text": "Amazonas" },
    //     { "text": "Mississippi" },
    //     { "text": "Yangtzé" }
    //   ]
    // },
    // {
    //   "id": 5,
    //   "title": "Qual é o país mais populoso do mundo?",
    //   "text": "Este país possui a maior população do mundo, com mais de um bilhão de habitantes.",
    //   "alternatives": [
    //     { "text": "Estados Unidos" },
    //     { "text": "Brasil" },
    //     { "text": "Índia" },
    //     { "text": "China" }
    //   ]
    // },
    // {
    //   "id": 6,
    //   "title": "Qual é o maior oceano do mundo?",
    //   "text": "Este oceano é o maior e mais profundo do mundo, cobrindo uma área vasta em torno do hemisfério sul.",
    //   "alternatives": [
    //     { "text": "Oceano Atlântico" },
    //     { "text": "Oceano Índico" },
    //     { "text": "Oceano Ártico" },
    //     { "text": "Oceano Pacífico" }
    //   ]
    // },
    // {
    //   "id": 7,
    //   "title": "Quem escreveu a peça de teatro 'Romeu e Julieta'?",
    //   "text": "Esta famosa peça de teatro conta a história de um amor trágico entre dois jovens de famílias rivais na cidade de Verona.",
    //   "alternatives": [
    //     { "text": "William Shakespeare" },
    //     { "text": "George Bernard Shaw" },
    //     { "text": "Arthur Miller" },
    //     { "text": "Tennessee Williams" }
    //   ]
    // },
    // {
    //   "id": 8,
    //   "title": "Qual é a montanha mais alta do mundo?",
    //   "text": "Esta montanha é a mais alta do mundo e faz parte da cordilheira do Himalaia, na fronteira entre o Nepal e o Tibete.",
    //   "alternatives": [
    //     { "text": "Monte Everest" },
    //     { "text": "Monte Kilimanjaro" },
    //     { "text": "Monte McKinley" },
    //     { "text": "Monte Aconcágua" }
    //   ]
    // },
    // {
    //   "id": 9,
    //   "title": "Qual é a maior religião do mundo?",
    //   "text": "Esta religião tem o maior número de seguidores em todo o mundo e é baseada nos ensinamentos de um profeta central.",
    //   "alternatives": [
    //     { "text": "Cristianismo" },
    //     { "text": "Islamismo" },
    //     { "text": "Hinduísmo" },
    //     { "text": "Budismo" }
    //   ]
    // },
    // {
    //   "id": 10,
    //   "title": "Qual é a maior floresta tropical do mundo?",
    //   "text": "Esta floresta tropical abrange vários países da América do Sul e é conhecida por sua biodiversidade e extensão.",
    //   "alternatives": [
    //     { "text": "Floresta Amazônica" },
    //     { "text": "Floresta Boreal" },
    //     { "text": "Floresta do Congo" },
    //     { "text": "Floresta de Bornéu" }
    //   ]
    // }
  ]

  question: any
  questionIndex = 0

  iniciar() {
    this.question = this.questions[0]
    this.screen = 3
  }

  responder(index: number) {
    console.log(this.questions[this.questionIndex].alternatives[index])
    this.questionIndex++
    if (this.questions[this.questionIndex]) {
      this.question = this.questions[this.questionIndex]
    } else {
      this.screen = 4
    }
  }

  verEnunciado() {
    this.screen = 0
  }
}
