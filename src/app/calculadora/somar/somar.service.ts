import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SomarService {

  constructor() { }

  private resultado : number;

  public calcular(valor1 : number, valor2 : number) {
    if(valor1 && !valor2){
      this.resultado = valor1;
    }else if(!valor1 && valor2){
      this.resultado = valor2;
    }
    else{
      this.resultado = valor1 + valor2;
    }
  }

  public mostrarResultado() : number {
    if(this.resultado){
      return this.resultado;
    }else{
      return null;
    }
  }
}
