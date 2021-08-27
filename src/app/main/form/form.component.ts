import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private store: Store<{ appState: any }>
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.store.select('appState').subscribe((response: any) => {
      for (const table of response.currentTable) {
        if (table.id == id) {
          this.user = table;
          break;
        }
      }
    });
  }

  user: any = {};
}
