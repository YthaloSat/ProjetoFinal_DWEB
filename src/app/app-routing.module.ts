import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricoReservasComponent } from './historico-reservas/historico-reservas.component';

const routes: Routes = [
  { path: "", redirectTo: "/historicoReservas", pathMatch: "full" },
  { path: "historico", component: HistoricoReservasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
