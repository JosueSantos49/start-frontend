import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AppServiceContatoService } from './../app-service-contato.service';

@Component({
  selector: 'app-componente-contato',
  templateUrl: './componente-contato.component.html',
  styleUrls: ['./componente-contato.component.css']
})
export class ComponenteContatoComponent implements OnInit {
  
  contatos: Array<any>; //listar os contatos na grade
  contato: any; //guarda os dados digitados no form

  //servico para buscar os contatos
  constructor(private service: AppServiceContatoService) { }

  ngOnInit(): void {
    this.contato = {};
    this.service.listar().subscribe(resposta => this.contatos);
  }

  //utiliza o metodo do servico para criar o contato
  criar(frm){//frm: FormGroup
    this.service.criar(this.contato).subscribe(resposta => {
      this.contatos.push(resposta);

      frm.reset();
    });
  }

}
