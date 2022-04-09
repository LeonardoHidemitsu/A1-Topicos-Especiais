import { Component, OnInit } from '@angular/core';
import { LeonardoDisciplinasService } from '../leonardo-disciplinas.service';

@Component({
  selector: 'app-leonardo-lista',
  templateUrl: './leonardo-lista.component.html',
  styleUrls: ['./leonardo-lista.component.css'],
})
export class LeonardoListaComponent implements OnInit {
  constructor(public disciplinas: LeonardoDisciplinasService) {}

  ngOnInit() {}
}
