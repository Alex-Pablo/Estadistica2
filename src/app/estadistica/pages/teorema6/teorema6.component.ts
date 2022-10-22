import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teorema6',
  templateUrl: './teorema6.component.html',
  styleUrls: ['./teorema6.component.css']
})
export class Teorema6Component implements OnInit {
  n:any;
  r:any;
  mostrar: boolean = false;
  Formula = ` = $ n! \\over r! (n-r)!  $`;
  SustituirTxt: any;
  SustituirTxt1: any;
  SustituirTxt2: any;
  resultado:any;
  CambiarTemas: boolean = true;
  contenEjempl1:any = `= $ 10! \\over 3! (10-3)! $ = 120`;
  contenEjempl2:any = `= $ 5! \\over 2! (5-2)!   $ = 10`;
  constructor() { }
  ngOnInit(): void {}

  meCambiarTemas(){
    this.CambiarTemas = !this.CambiarTemas
    console.log( this.CambiarTemas ); 
  }

  Meresultado(){
    this.mostrar = true
    this.MeSustituirDatos();

    let restaNR: number = this.n - this.r;
    this.SustituirTxt1  = ` $ ={ ${this.n}! \\over ${this.r}! ${restaNR}!  }$`
    let multiNR = this.MePermutacion(this.r) * this.MePermutacion(restaNR);
    this.SustituirTxt2 = ` $ ={ ${this.MePermutacion(this.n) } \\over ${multiNR}  }$`
    this.resultado = this.MePermutacion(this.n) / multiNR;
  }


  MePermutacion(n:any){
    let multiN =1
    for (let i = n; i >0; i--){
      multiN = multiN * i;
    }
    return multiN
  }


  MeSustituirDatos(){
    this.SustituirTxt = ` = $ ${this.n}! \\over ${this.r}! (${this.n}-${this.r})!  $`;
  }

}
