import { Component, OnInit } from '@angular/core';
import { ImcService } from '../calculadora';

@Component({
  selector: 'app-imc-tab',
  templateUrl: './imc-tab.page.html',
  styleUrls: ['./imc-tab.page.scss'],
})
export class ImcTab implements OnInit {

  peso : number;
  altura : number;
  resultado : string;

  constructor(private imc : ImcService) { }

  ngOnInit() {
  }
  
  calculaImc(){
    this.resultado = this.imc.calcular(this.peso, this.altura);
  }

}
