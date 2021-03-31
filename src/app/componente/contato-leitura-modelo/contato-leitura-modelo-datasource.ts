import { Contato } from './../produto.model';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
//import { getMaxListeners } from 'node:process';

/*
// TODO: Replace this with your own data model type
export interface ContatoLeituraModeloItem {
  name: string;
  id: number;
}*/ 

// TODO: replace this with real data from your application
const EXAMPLE_DATA: Contato[] = [
  {id: 1, name: 'Hydrogen', email: 'josue@gmail'},
  {id: 2, name: 'Helium', email: 'josue@gmail'},
  {id: 3, name: 'Lithium', email: 'josue@gmail'},
  {id: 4, name: 'Beryllium', email: 'josue@gmail'},
  {id: 5, name: 'Boron', email: 'josue@gmail'},
  {id: 6, name: 'Carbon', email: 'josue@gmail'},
  {id: 7, name: 'Nitrogen', email: 'josue@gmail'},
  {id: 8, name: 'Oxygen', email: 'josue@gmail'},
  {id: 9, name: 'Fluorine', email: 'josue@gmail'},
  {id: 10, name: 'Neon', email: 'josue@gmail'},
  {id: 11, name: 'Sodium', email: 'josue@gmail'},
  {id: 12, name: 'Magnesium', email: 'josue@gmail'},
  {id: 13, name: 'Aluminum', email: 'josue@gmail'},
  {id: 14, name: 'Silicon', email: 'josue@gmail'},
  {id: 15, name: 'Phosphorus', email: 'josue@gmail'},
  {id: 16, name: 'Sulfur', email: 'josue@gmail'},
  {id: 17, name: 'Chlorine', email: 'josue@gmail'},
  {id: 18, name: 'Argon', email: 'josue@gmail'},
  {id: 19, name: 'Potassium', email: 'josue@gmail'},
  {id: 20, name: 'Calcium', email: 'josue@gmail'},
];

/**
 * Data source for the ContatoLeituraModelo view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ContatoLeituraModeloDataSource extends DataSource<Contato> {
  data: Contato[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Contato[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Contato[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Contato[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
