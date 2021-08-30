import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/demo.reducer';
import * as appActions from './../../store/demo.actions';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<{ appState: AppState }>
  ) {}

  ngOnInit(): void {
    this.componentRouter = this.router.url;
    this.loadTable();
  }

  alphabets = [
    '#',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'z',
  ];

  table!: Observable<any>;
  componentRouter: string = '';
  urls: any = {
    accounts: 'https://jsonplaceholder.typicode.com/users',
    contacts: 'https://jsonplaceholder.typicode.com/users',
  };

  loadTable() {
    this.http
      .get(this.urls[this.componentRouter.slice(1)], {
        observe: 'body',
        responseType: 'json',
      })
      .subscribe((response: any) => {
        this.store.dispatch(new appActions.Table(response));
      });
    this.table = this.store.select('appState');
  }
}
