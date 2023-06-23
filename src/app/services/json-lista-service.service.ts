import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonListaServiceService {
  private url = 'https://allramos.github.io/desenvolvimento-web/lista-reservas.json'
<<<<<<< HEAD
  
  constructor(private http: HttpClient) { }

=======
  constructor(private http: HttpClient) { }
>>>>>>> bedd72fde14f53ca5752ce612ae44f604013fd21
  getReservas(): Observable<any> {
    return this.http.get<any>(this.url)
  }
}
