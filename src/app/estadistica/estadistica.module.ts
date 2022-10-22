import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadisticaRoutingModule } from './estadistica-routing.module';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { Teorema1Component } from './pages/teorema1/teorema1.component';
import { Teorema2Component } from './pages/teorema2/teorema2.component';
import { Teorema3Component } from './pages/teorema3/teorema3.component';
import { Teorema4Component } from './pages/teorema4/teorema4.component';
import { Teorema5Component } from './pages/teorema5/teorema5.component';
import { Teorema6Component } from './pages/teorema6/teorema6.component';
import { MathjaxModule } from 'mathjax-angular';
import { FormsModule } from '@angular/forms';
import { Teorema7Component } from './pages/teorema7/teorema7.component';
import { Teorema8Component } from './pages/teorema8/teorema8.component';
import { Teorema9Component } from './pages/teorema9/teorema9.component';


@NgModule({
  declarations: [
    MenuPageComponent,
    Teorema1Component,
    Teorema2Component,
    Teorema3Component,
    Teorema4Component,
    Teorema5Component,
    Teorema6Component,
    Teorema7Component,
    Teorema8Component,
    Teorema9Component,
  ],
  imports: [
    CommonModule,
    EstadisticaRoutingModule,
    MathjaxModule.forRoot(),
    FormsModule
  ]
})
export class EstadisticaModule { }
