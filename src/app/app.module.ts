import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
=======
import { MatTableModule } from '@angular/material/table';
>>>>>>> bedd72fde14f53ca5752ce612ae44f604013fd21
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoricoReservasComponent } from './historico-reservas/historico-reservas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { SolicitarReservaComponent } from './solicitar-reserva/solicitar-reserva.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatetimepickerModule} from '@mat-datetimepicker/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatNativeDateModule } from '@angular/material/core';
=======
import { HttpClientModule } from '@angular/common/http'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
>>>>>>> bedd72fde14f53ca5752ce612ae44f604013fd21

@NgModule({
  declarations: [
    AppComponent,
    HistoricoReservasComponent,
    SolicitarReservaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
<<<<<<< HEAD
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatPaginatorModule,
    MatDividerModule,
    MatDatetimepickerModule,
    NgxMaterialTimepickerModule,
    MatNativeDateModule
=======
    MatTableModule,
>>>>>>> bedd72fde14f53ca5752ce612ae44f604013fd21
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }