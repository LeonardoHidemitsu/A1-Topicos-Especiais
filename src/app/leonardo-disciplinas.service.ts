import { Injectable } from '@angular/core';

interface Disciplina {
  id: string;
  nome: string;
  diaDaSemana: string;
  horario: string;
  ementa: string;
}

@Injectable()
export class LeonardoDisciplinasService {
  list: Array<Disciplina> = [
    {
      id: 'IDS001',
      nome: 'Desenvolvimento para Servidores I',
      diaDaSemana: 'Segunda-Feira',
      horario: '9:30 - 13:00',
      ementa:
        'PHP histórico e emprego. Instalação e configuração básica do PHP e um IDE. Sintaxe básica do PHP. Usando o PHP como um mecanismo de modelo simples. Panorama das melhores práticas com PHP. Conceitos de programação HTTP. Codificação de caracteres. Localidades, fusos horários e funções de tempo. Strings. Uso de Array e funções de matriz. Orientação a objetos em PHP (Classes, objetos, herança, encapsulamento, polimorfismo, agregação, composição e métodos). Tratamento de exceções de erro. Arquitetura do lado do servidor. Manipulação de dados postados. Enviando e-mail. Sessões e autenticação. Cookies. Arquivo manuseio e armazenamento de dados em arquivos de texto. Gerenciador de banco de dados e suas funções. Frameworks. Web Services, API, RSS, JSON e Ajax. Hospedagem compartilhada',
    },
    {
      id: 'ISW012',
      nome: 'Desenvolvimento para Dispostivos Móveis I',
      diaDaSemana: 'Segunda-Feira',
      horario: '19:00 - 22:30',
      ementa:
        'Introdução e conceitos. Recursos disponíveis para dispositivos móveis na linguagem de marcação de textos. Uso de algum ambiente de desenvolvimento: configuração do ambiente, emulação de dispositivos móveis nos computadores pessoais, interface gráfica, serviços disponíveis, banco de dados nos dispositivos. Desenvolvimento de aplicações que utilizam dados de geolocalização. Integração entre sistemas remotos',
    },
    {
      id: 'AGM004',
      nome: 'Negócios e Marketing e Eletrônicos',
      diaDaSemana: 'Quarta-Feira',
      horario: '19:00 - 22:30',
      ementa:
        'Conceitos de marketing e de marketing digital. O comportamento do consumidor on-line. Marketing de conteúdo. Marketing nas mídias sociais. E-mail marketing. Marketing viral. Publicidade on-line. Pesquisa de marketing on-line. Marketing e os negócios na Internet. Estudos de caso',
    },
    {
      id: 'IDS002',
      nome: 'Desenvolvimento para Servidores II',
      diaDaSemana: 'Quinta-Feira',
      horario: '19:00 - 22:30',
      ementa:
        'Conceitos e evolução das tecnologias de programação de servidores. Recursos da linguagem escolhida para servidores na Internet. Padrões de projetos. Integração com sistemas (Google Maps API, Twitter, entre outros',
    },
    {
      id: 'ITE004',
      nome: 'Tópicos Especiais em Sistemas para Internet II',
      diaDaSemana: 'Sexta-Feira',
      horario: '19:00 - 22:30',
      ementa: 'Recursos e aplicações da tecnologia escolhida',
    },
    {
      id: 'ISW011',
      nome: 'Projeto de Prototipagem e Testes de Usabilidade',
      diaDaSemana: 'Sábado',
      horario: '8:00 - 11:30',
      ementa:
        'Conceitos, métodos de prototipagem e ferramentas de teste de protótipos. Conceitos de usabilidade e estratégias de design. Métodos de teste de usabilidade. Planejamento de teste de usabilidade. Recrutamento. Projeto de usabilidade. Plano de teste. Sessão de teste de usabilidade. Análise de dados. Comunicação dos resultados. Variação de técnicas',
    },
    {
      id: 'TTG401',
      nome: 'Projeto de Trabalho de Graduação em Sistemas para Internet',
      diaDaSemana: 'Sábado',
      horario: '11:30 - 13:10',
      ementa:
        'Conceito de portfólio no âmbito da educação superior. Planejamento e organização de portfólios',
    },
  ];

  constructor() {}

  getList() {
    return this.list;
  }

  add(
    id: string,
    nome: string,
    diaDaSemana: string,
    horario: string,
    ementa: string
  ) {
    this.list.push({ id, nome, diaDaSemana, horario, ementa });
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }
}
