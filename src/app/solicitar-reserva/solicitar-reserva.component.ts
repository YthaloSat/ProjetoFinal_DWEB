import { Component } from '@angular/core';

@Component({
  selector: 'app-solicitar-reserva',
  templateUrl: './solicitar-reserva.component.html',
  styleUrls: ['./solicitar-reserva.component.css']
})
export class SolicitarReservaComponent {

  nomeAluno!: string;
  turma!: string;
  nomeProfessor!: string;
  sala!: string;
  dataReserva!: Date;
  horaReserva!: string;

  submitForm() {
    const dataFormatada = this.dataReserva.toISOString().split('T')[0];
    const dataHoraReserva = dataFormatada + ' ' + this.horaReserva;

    const dadosFormulario = {
      nomeAluno: this.nomeAluno,
      turma: this.turma,
      nomeProfessor: this.nomeProfessor,
      sala: this.sala,
      data_hora: dataHoraReserva
    };

    console.log('JSON:', JSON.stringify(dadosFormulario));
  }

}

 
