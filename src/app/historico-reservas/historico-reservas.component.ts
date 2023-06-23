import { Component } from '@angular/core';
import { JsonListaServiceService } from '../services/json-lista-service.service';

@Component({
  selector: 'app-historico-reservas',
  templateUrl: './historico-reservas.component.html',
  styleUrls: ['./historico-reservas.component.css']
})
export class HistoricoReservasComponent {
<<<<<<< HEAD
  displayedColumns: string[] = ['Sala', 'Professor', 'Data', 'Aluno', 'Turma'];
=======
  displayedColumns: string[] = ['Sala', 'Professor', 'Data', 'Aluno'];
>>>>>>> bedd72fde14f53ca5752ce612ae44f604013fd21
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
