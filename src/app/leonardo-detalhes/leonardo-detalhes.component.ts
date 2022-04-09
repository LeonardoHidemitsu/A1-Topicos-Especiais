import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { listData } from '../list';

@Component({
  selector: 'app-leonardo-detalhes',
  templateUrl: './leonardo-detalhes.component.html',
  styleUrls: ['./leonardo-detalhes.component.css'],
})
export class LeonardoDetalhesComponent implements OnInit {
  item;


  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.item = listData[params.get('index')];
    });
  }
}
