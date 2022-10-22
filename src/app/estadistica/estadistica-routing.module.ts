import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { Teorema1Component } from './pages/teorema1/teorema1.component';
import { Teorema2Component } from './pages/teorema2/teorema2.component';
import { Teorema3Component } from './pages/teorema3/teorema3.component';
import { Teorema4Component } from './pages/teorema4/teorema4.component';
import { Teorema5Component } from './pages/teorema5/teorema5.component';
import { Teorema6Component } from './pages/teorema6/teorema6.component';
import { Teorema7Component } from './pages/teorema7/teorema7.component';
import { Teorema8Component } from './pages/teorema8/teorema8.component';
import { Teorema9Component } from './pages/teorema9/teorema9.component';

const routes: Routes = [
  { path:"menu", component: MenuPageComponent },
  { path:"teorema1", component:  Teorema1Component },
  { path:"teorema2" , component: Teorema2Component },
  { path:"teorema3", component:  Teorema3Component },
  { path:"teorema4" , component: Teorema4Component },
  { path:"teorema5" , component: Teorema5Component },
  { path:"teorema6", component:  Teorema6Component },
  { path:"teorema7",  component: Teorema7Component },
  { path: "teorema8", component: Teorema8Component },
  { path: "teorema9", component: Teorema9Component },
  { path:"**", redirectTo:"menu" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadisticaRoutingModule { }
