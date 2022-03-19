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
    return this.vp * Math.pow(1 + this.j / 100, this.n);
  }

  teste() {
    for (let i = 0; i < 3; i++) {
      return 'Block statement execution no.' + i;
    }
  }

  createRange() {
    var items = [];
    for (let i = 0; i <= this.n; i++) {
      items.push(this.vp * Math.pow(1 + this.j / 100, i));
      this.mes = i;
      console.log(this.mes);
      console.log(items);
    }

    return items;
  }
}

