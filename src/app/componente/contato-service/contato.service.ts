import { Contato } from './../produto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  baseUrl = "http://localhost:8080/contacts";

  //baseUrl = "http://localhost:3001/contacts";

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
    ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  criarConato(contato:Contato): Observable<Contato>{
    return this.http.post<Contato>(this.baseUrl, contato)
  }

  leituraContato(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.baseUrl)
  }

  leituraById(id: string): Observable<Contato> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Contato>(url)
  }

  atualizar(contato: Contato): Observable<Contato> {
    const url = `${this.baseUrl}/${contato.id}`
    return this.http.put<Contato>(url, contato)
  }

}
