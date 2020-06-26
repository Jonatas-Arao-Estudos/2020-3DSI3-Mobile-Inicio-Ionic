import { Component } from '@angular/core';
import { SomarService } from '../calculadora';

@Component({
  selector: 'app-somarTab',
  templateUrl: 'somar-tab.page.html',
  styleUrls: ['somar-tab.page.scss']
})
export class SomarTab {

  constructor(private somar : SomarService) {}
  
  ngOnInit() {
    this.resultado = this.somar.calcular(this.valor1, this.valor2);
  }

  valor1 : number;
  valor2 : number;
  resultado : number;

  calcularSoma(){
    this.resultado = this.somar.calcular(this.valor1, this.valor2);
  }
}
