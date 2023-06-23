import { Component } from '@angular/core';
import { JsonListaServiceService } from '../services/json-lista-service.service';

@Component({
  selector: 'app-historico-reservas',
  templateUrl: './historico-reservas.component.html',
  styleUrls: ['./historico-reservas.component.css']
})
export class HistoricoReservasComponent {
  displayedColumns: string[] = ['Sala', 'Professor', 'Data', 'Aluno'];
  reservas!: any

  constructor(private reservasService: JsonListaServiceService) {
    this.getReservas()
  }
  getReservas(): void {
    this.reservasService.getReservas().subscribe(lista => this.reservas = lista)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.reservas.filter = filterValue.trim().toLowerCase();
  }
}
