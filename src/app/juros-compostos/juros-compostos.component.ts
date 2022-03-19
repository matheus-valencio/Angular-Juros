import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-compostos',
  templateUrl: './juros-compostos.component.html',
  styleUrls: ['./juros-compostos.component.css'],
})
export class JurosCompostosComponent implements OnInit {
  vp: number;
  j: number;
  n: number;
  mes: number;
  constructor() {
    this.vp = 100;
    this.j = 2.5;
    this.n = 3;
    this.mes = 0;
  }

  ngOnInit() {}

  getJurosCompostos() {
    var items = [];
    for (let i = 0; i <= this.n; i++) {
      var valor = this.vp * Math.pow(1 + this.j / 100, i);
      items.push(valor.toFixed(4));
      this.mes = i;
    }

    return items;
  }
}
