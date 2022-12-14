import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teorema4',
  templateUrl: './teorema4.component.html',
  styleUrls: ['./teorema4.component.css']
})
export class Teorema4Component implements OnInit {
  n:any;
  n1:any;
  mostrar: boolean = false;
  Formula = ` = $n! \\over n1! n2! ... nk! $`;

  SustituirTxt: any;
  SustituirTxt1: any;
  resultado:any;
  CambiarTemas: boolean = true;
  contenEjempl1:any = ` = $10! \\over 1! 2!  4! 3!$  = 12,600`   ;
  constructor() { }

  ngOnInit(): void {}

  meCambiarTemas(){
    this.CambiarTemas = !this.CambiarTemas
    console.log( this.CambiarTemas ); 
  }


  Meresultado(){
    this.mostrar = true
    //n1 txt lo convetimos en un areay
    let permutacion = this.n1.split(',');

    //Atravez de la formula sustituimos los datos
    this.MeSustituirDatos(permutacion)

    let  multiplicacion = permutacion.map( (i: any)=>{
      let helper = 1;
      for (let e = i; e > 0; e--) {
        helper = helper * e
      }
      return helper
    } )

    

    let multiN1 = 1
    for (let i = 0; i < multiplicacion.length; i++) {
      multiN1 = multiN1 * multiplicacion[i]
    }

    //nPermutacion
    let multiN =1
    for (let i = this.n; i >0; i--){
      multiN = multiN * i;
    }
    this.SustituirTxt1 = `= $${multiN} \\over ${multiN1} $`;

    //resultado final
    this.resultado = multiN / multiN1
  }

  MeSustituirDatos(permutacion:any){
    let nuMPer ='';
    for (let i = 0; i < permutacion.length; i++) {
      nuMPer = nuMPer + permutacion[i]+'!'; 
    }
    this.SustituirTxt = `= $${this.n}! \\over ${nuMPer} $`;
  }



}
