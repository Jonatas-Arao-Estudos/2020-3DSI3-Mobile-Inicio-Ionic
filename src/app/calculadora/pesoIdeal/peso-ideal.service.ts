import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PesoIdealService {

  constructor() { }
  
  public calcular(genero : string, altura : number) : string{
    let calculo : number;
    if(genero == "homem"){
      calculo = (altura - 100) * 0.9;
    }
    else if(genero == "mulher"){
      calculo = (altura - 100) * 0.85;
    }
    if(calculo > 0){
      return `${calculo.toFixed(2)} Kg`;
    }else{
      return null
    }
  }
}
