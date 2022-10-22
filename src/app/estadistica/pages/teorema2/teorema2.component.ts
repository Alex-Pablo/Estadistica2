import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teorema2',
  templateUrl: './teorema2.component.html',
  styleUrls: ['./teorema2.component.css']
})
export class Teorema2Component implements OnInit {
  n:any;
  r:any;
  mostrar: boolean = false;
  Formula = `$nPr = {n! \\over (n-r)!}$`;
  SustituirTxt: any;
  RestaNRTxt:any;
  resultado:any;
  CambiarTemas: boolean = true;

  contenEjempl1:any = `$${50}P${2} = {${50}! \\over (${50}-${2})!}$ `;
  contenEjempl2:any = `$nPr =(50)(49) =2450 $`;


  constructor() { }
  ngOnInit(): void {}

  meCambiarTemas(){
    this.CambiarTemas = !this.CambiarTemas
    console.log( this.CambiarTemas ); 
  }

  Meresultado(){
    this.mostrar = true
    this.SustituirTxt = `$${this.n}P${this.r} = {${this.n}! \\over (${this.n}-${this.r})!}$`;
    this.RestaNRTxt = `$nPr = {${this.n}! \\over (${this.n - this.r})!}$`;

    let restanr = this.n - this.r;
    let helper = 1

    for (let i = this.n ; i > restanr; i--) {
      helper = helper * i;      
    }
    this.resultado = helper;
  }



}
