import { Injectable } from '@angular/core';

interface Disciplina {
  materia: string;
}

@Injectable()
export class LeonardoDisciplinasService {
  list: Array<Disciplina> = [
    {
      materia: 'IDS001 | Desenvolvimento para Servidores I | Segunda-Feira | 9:30 - 13:00'
    },
    {
      materia: 'ISW012 | Desenvolvimento para Dispostivos Móveis I | Segunda-Feira | 19:00 - 22:30'
    },
    {
      materia: 'AGM004 | Negócios e Marketing e Eletrônicos | Quarta-Feira | 19:00 - 22:30',
    },
    {
      materia: 'IDS002 | Desenvolvimento para Servidores II | Quinta-Feira | 19:00 - 22:30',
    },
    {
      materia: 'ITE004 | Tópicos Especiais em Sistemas para Internet II | Sexta-Feira | 19:00 - 22:30'
    },
    {
      materia: 'ISW011 | Projeto de Prototipagem e Testes de Usabilidade | Sábado | 8:00 - 11:30'
    },
    {
      materia: 'TTG401 | Projeto de Trabalho de Graduação em Sistemas para Internet | Sábado | 11:30 - 13:10'
    },
  ];

  constructor() {}

  getList() {
    return this.list;
  }

  add(
    materia: string,
  ) {
    this.list.push({ materia });
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }
}
