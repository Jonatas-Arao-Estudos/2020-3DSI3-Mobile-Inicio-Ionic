import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImcService {

  constructor() { }
  
  public calcular(peso : number, altura : number) : string{
    let calculo : number;
    calculo = peso / Math.pow(altura,2);

    if(calculo < 16){
      return 'Baixo peso muito grave -  abaixo de 16 kg/m²';
    }else if(calculo >= 16 && calculo <= 16.99){
      return 'Baixo peso grave - entre 16 e 16,99 kg/m²';
    }else if(calculo >= 17 && calculo <= 18.49){
      return 'Baixo peso - entre 17 e 18,49 kg/m²';
    }else if(calculo >= 18.5 && calculo <= 24.99){
      return 'Peso normal - entre 18,50 e 24,99 kg/m²';
    }else if(calculo >= 25 && calculo <= 29.99){
      return 'Sobrepeso - entre 25 e 29,99 kg/m²';
    }else if(calculo >= 30 && calculo <= 34.99){
      return 'Obesidade grau I - entre 30 e 34,99 kg/m²';
    }else if(calculo >= 35 && calculo <= 39.99){
      return 'Obesidade grau II - entre 35 e 39,99 kg/m²';
    }else if(calculo >= 40){
      return 'Obesidade grau III (obesidade mórbida) - maior que 40 kg/m²';
    }
  }
}
