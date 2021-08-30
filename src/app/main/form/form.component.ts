import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/demo.reducer';
import * as appActions from './../../store/demo.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private store: Store<{ appState: any }>
  ) {}

  ngOnInit(): void {
    this.componentRoute = `/${this.route.snapshot.url[0].path}`;

    const id = this.route.snapshot.params.id;
    if (id !== undefined) {
      this.http
        .get('https://jsonplaceholder.typicode.com/users/' + id, {
          observe: 'body',
          responseType: 'json',
        })
        .subscribe((response) => {
          this.user = response;
        });
    } else {
      this.user = {
        name: '',
        phone: '',
        address: {
          city: '',
        },
        email: '',
      };
    }
  }
  user: any = {};
  componentRoute: string = '';

  usernameCharacter(name: string) {
    if (name) {
      let nameArray = name.split(' ');
      return `${nameArray[0].charAt(0)}${nameArray[1].charAt(0)}`;
    }
    return;
  }

  deleteUser() {
    this.store.select('appState').subscribe((response: AppState) => {
      let index: number = 0;
      for (const user of response.currentTable) {
        if (user.id === this.user.id) {
          index = response.currentTable.indexOf(user);
          break;
        }
      }
      this.store.dispatch(new appActions.DeleteUser(index));
    });
  }
}
