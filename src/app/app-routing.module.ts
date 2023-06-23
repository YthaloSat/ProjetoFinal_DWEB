import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricoReservasComponent } from './historico-reservas/historico-reservas.component';
import { SolicitarReservaComponent } from './solicitar-reserva/solicitar-reserva.component';

const routes: Routes = [
<<<<<<< HEAD
  {path: "", redirectTo: "/solicitar", pathMatch: "full"},
  {path: "solicitar", component: SolicitarReservaComponent},
  {path: "historico", component: HistoricoReservasComponent},
=======
  { path: "", redirectTo: "/historicoReservas", pathMatch: "full" },
  { path: "historico", component: HistoricoReservasComponent },
>>>>>>> bedd72fde14f53ca5752ce612ae44f604013fd21
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
