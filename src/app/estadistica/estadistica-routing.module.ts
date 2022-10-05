import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { Teorema1Component } from './pages/teorema1/teorema1.component';
import { Teorema2Component } from './pages/teorema2/teorema2.component';
import { Teorema3Component } from './pages/teorema3/teorema3.component';
import { Teorema4Component } from './pages/teorema4/teorema4.component';
import { Teorema5Component } from './pages/teorema5/teorema5.component';
import { Teorema6Component } from './pages/teorema6/teorema6.component';

const routes: Routes = [
  { path:"menu", component: MenuPageComponent },
  { path:"teorema1", component:  Teorema1Component },
  { path:"teorema2" , component: Teorema2Component },
  { path:"teorema3", component:  Teorema3Component },
  { path:"teorema4" , component: Teorema4Component },
  { path:"teorema5" , component: Teorema5Component },
  { path:"teorema6", component:  Teorema6Component },
  { path:"**", redirectTo:"menu" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadisticaRoutingModule { }
