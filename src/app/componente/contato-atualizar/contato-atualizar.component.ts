import { Contato } from './../produto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoService } from './../contato-service/contato.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato-atualizar',
  templateUrl: './contato-atualizar.component.html',
  styleUrls: ['./contato-atualizar.component.css']
})
export class ContatoAtualizarComponent implements OnInit {

  contato: Contato;

  constructor(
    private contatoService: ContatoService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.contatoService.leituraById(id).subscribe(contato => {
      this.contato = contato
    })
  }

  atualizarContato(): void {
    this.contatoService.atualizar(this.contato).subscribe(() => {
      this.contatoService.showMessage('Contato atualizado!')
      this.router.navigate(['/contatos'])
    })
  }

  cancela(): void {
    this.router.navigate(['/contatos'])
  }

}
