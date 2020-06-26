import { Component, OnInit } from '@angular/core';
import { PesoIdealService } from '../calculadora';

@Component({
  selector: 'app-peso-ideal-tab',
  templateUrl: './peso-ideal-tab.page.html',
  styleUrls: ['./peso-ideal-tab.page.scss'],
})
export class PesoIdealTab implements OnInit {

  genero : string;
  altura : number;
  resultado : string;

  constructor(private pesoIdeal : PesoIdealService) { }

  ngOnInit() {
    this.genero = "homem"
  }

  calcularPesoIdeal(){
    this.resultado = this.pesoIdeal.calcular(this.genero, this.altura);
  }
}
