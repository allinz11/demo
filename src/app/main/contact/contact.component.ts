import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
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
