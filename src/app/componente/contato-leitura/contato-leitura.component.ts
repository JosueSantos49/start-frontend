import { ContatoService } from './../contato-service/contato.service';
import { Contato } from './../produto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato-leitura',
  templateUrl: './contato-leitura.component.html',
  styleUrls: ['./contato-leitura.component.css']
})
export class ContatoLeituraComponent implements OnInit {

  contatos: Contato[] 
  displayedColumns = ['id', 'name', 'email', 'phone', 'action']

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.contatoService.leituraContato().subscribe(contatos =>{
      this.contatos = contatos
      console.log(contatos)
    })
  }

}
