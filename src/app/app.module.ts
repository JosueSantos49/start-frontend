import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteContatoComponent } from './componente-contato/componente-contato.component';
import { AppServiceContatoService } from './app-service-contato.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componente-header/tenplate/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './componente-footer/template/footer/footer.component';
import { NavComponent } from './conponente/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { ContatoCrudComponent } from './views/contato-crud/contato-crud.component';
import { ContatoCriarComponent } from './componente/contato-criar/contato-criar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ContatoLeituraComponent } from './componente/contato-leitura/contato-leitura.component';
import { ContatoLeituraModeloComponent } from './componente/contato-leitura-modelo/contato-leitura-modelo.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ContatoAtualizarComponent } from './componente/contato-atualizar/contato-atualizar.component';



@NgModule({
  declarations: [
    AppComponent,
    ComponenteContatoComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ContatoCrudComponent,
    ContatoCriarComponent,
    ContatoLeituraComponent,
    ContatoLeituraModeloComponent,
    ContatoAtualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [ {
    provide: LOCALE_ID, 
    useValue: 'pt-BR'},
    AppServiceContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
