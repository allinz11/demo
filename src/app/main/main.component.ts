import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/demo.reducer';
import * as appActions from './../store/demo.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private store: Store<{ appState: AppState }>
  ) {}

  ngOnInit(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/users', {
        observe: 'body',
        responseType: 'json',
      })
      .subscribe((response: any) => {
        this.store.dispatch(new appActions.Table(response));
      });
  }
}
