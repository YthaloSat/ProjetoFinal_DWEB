import { Component } from '@angular/core';
import { JsonListaServiceService } from '../services/json-lista-service.service';

@Component({
  selector: 'app-historico-reservas',
  templateUrl: './historico-reservas.component.html',
  styleUrls: ['./historico-reservas.component.css']
})
export class HistoricoReservasComponent {
  lista!: any
  ocorrencias!: any

  constructor(private jsonListaServiceService: JsonListaServiceService) {
    this.getLista()
  }

  getLista(): void {
    this.jsonListaServiceService.getAll().subscribe(listas => this.lista = listas)
  }

  getOcorrencias(indice: number): void {
    this.ocorrencias = this.lista[indice].ocorrencias;
  }
}
