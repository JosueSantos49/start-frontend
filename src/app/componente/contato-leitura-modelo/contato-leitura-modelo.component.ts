import { Contato } from './../produto.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ContatoLeituraModeloDataSource} from './contato-leitura-modelo-datasource';

@Component({
  selector: 'app-contato-leitura-modelo',
  templateUrl: './contato-leitura-modelo.component.html',
  styleUrls: ['./contato-leitura-modelo.component.css']
})
export class ContatoLeituraModeloComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Contato>;
  dataSource: ContatoLeituraModeloDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'email', 'phone'];

  ngOnInit() {
    this.dataSource = new ContatoLeituraModeloDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
