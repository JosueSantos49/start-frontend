import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceContatoService {

  //Url da API
  contatosUrl = "http://localhost:8080/contacts";

  //contatosUrl = 'http://localhost:8080/contacts';

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Array<any>>(this.contatosUrl);
  }

  criar(contato: any){
    return this.http.post(this.contatosUrl, contato);
  }

}
