import { Component } from '@angular/core';
import { SomarService } from '../calculadora';

@Component({
  selector: 'app-somarTab',
  templateUrl: 'somarTab.page.html',
  styleUrls: ['somarTab.page.scss']
})
export class SomarTab {

  constructor(private somar : SomarService) {}

  valor1 : number;
  valor2 : number;

  botaoSomar(){
    this.somar.calcular(this.valor1, this.valor2);
  }

  mostrarResultado() : number {
    return this.somar.mostrarResultado();
  }
}
