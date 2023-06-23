import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricoReservasComponent } from './historico-reservas/historico-reservas.component';
import { SolicitarReservaComponent } from './solicitar-reserva/solicitar-reserva.component';

const routes: Routes = [
  {path: "", redirectTo: "/solicitar", pathMatch: "full"},
  {path: "solicitar", component: SolicitarReservaComponent},
  {path: "historico", component: HistoricoReservasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
