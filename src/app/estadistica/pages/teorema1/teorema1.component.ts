import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teorema1',
  templateUrl: './teorema1.component.html',
  styleUrls: ['./teorema1.component.css']
})
export class Teorema1Component implements OnInit {
  dato:any;
  resultado:any;
  CambiarTemas: boolean = true;
  constructor() { }
  contenEjempl1:any = `$${50}P${2} = {${50}! \\over (${50}-${2})!}$ `;
  ngOnInit(): void {
  }

  meCambiarTemas(){
    this.CambiarTemas = !this.CambiarTemas
    console.log( this.CambiarTemas ); 
  }

  resolver(){
    if (this.dato ===0) {
      this.resultado = 0
      return
    }
    let helper =1;
    for (let i = this.dato; i > 0; i--) {
      helper = helper * i
    }
    this.resultado = `n! = ${this.dato}! = ${helper}`;
  }
}
