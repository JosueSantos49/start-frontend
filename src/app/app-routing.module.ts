import { ContatoAtualizarComponent } from './componente/contato-atualizar/contato-atualizar.component';
import { ContatoCriarComponent } from './componente/contato-criar/contato-criar.component';
import { ComponenteContatoComponent } from './componente-contato/componente-contato.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ContatoCrudComponent } from './views/contato-crud/contato-crud.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },{
    path: "contatos",
    component: ContatoCrudComponent
  },
  {
    path: "contatos/criar",
    component: ContatoCriarComponent
  },
  { 
    path: 'contacts', 
    component: ComponenteContatoComponent 
  },
  { 
    path: 'contacts/atualizar/:id', 
    component: ContatoAtualizarComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
