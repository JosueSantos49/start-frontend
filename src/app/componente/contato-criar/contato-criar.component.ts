import { Contato } from './../produto.model';
import { ContatoService } from './../contato-service/contato.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contato-criar',
  templateUrl: './contato-criar.component.html',
  styleUrls: ['./contato-criar.component.css']
})
export class ContatoCriarComponent implements OnInit {

  contato: Contato = {    
    name: '',
    email: '',
    phone: ''
  }

  constructor(
    private contatoService: ContatoService,
    private router: Router) { }

  ngOnInit(): void {    
  }

  criarContato(): void {
    this.contatoService.criarConato(this.contato).subscribe(() => {
      this.contatoService.showMessage('Contato criado!')
      this.router.navigate(['/contatos'])
    })    
  }

  cancela(): void {
    this.router.navigate(['/contatos'])
  }


}
