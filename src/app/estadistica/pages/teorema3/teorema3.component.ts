import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teorema3',
  templateUrl: './teorema3.component.html',
  styleUrls: ['./teorema3.component.css']
})
export class Teorema3Component implements OnInit {
  n:any;
  mostrar: boolean = false;
  SustituirTxt: any;
  RestaNRTxt:any;
  resultado:any;
  CambiarTemas: boolean = true;
  Formula = `$(n-1)!$`;
  contenEjempl1:any = `$=(${4}-1)!$`;
  contenEjempl2:any = `$=${3}! = 6$`;

  constructor() { }
  ngOnInit(): void {}

  meCambiarTemas(){
    this.CambiarTemas = !this.CambiarTemas
    console.log( this.CambiarTemas ); 
  }


  Meresultado(){
    let restaN = this.n -1;
    this.mostrar = true;
    this.SustituirTxt = `$=(${this.n}-1)!$`;
    this.RestaNRTxt = `$=${restaN}!$`;

    let helper = 1
    for (let i = restaN ; i > 0; i--) {
      helper = helper * i;      
    }
    this.resultado = helper;
  }
}
