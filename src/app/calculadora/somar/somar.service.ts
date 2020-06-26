import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SomarService {

  constructor() { }

  public calcular(valor1 : number, valor2 : number) {
    if(!valor1 && !valor2){
      return 0;
    }
    else if(valor1 && !valor2){
      return valor1;
    }else if(!valor1 && valor2){
      return valor2;
    }
    else{
      return valor1 + valor2;
    }
  }
}
