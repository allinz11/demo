import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from './log/log.component';
import { FormComponent } from './main/form/form.component';
import { MainComponent } from './main/main.component';
import { TablesComponent } from './main/tables/tables.component';

const routes: Routes = [
  {
    path: '',
    component: LogComponent,
  },

  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'accounts',
        component: TablesComponent,
      },

      {
        path: 'accounts/create',
        component: FormComponent,
      },

      {
        path: 'accounts/:id',
        component: FormComponent,
      },
      {
        path: 'contacts',
        component: TablesComponent,
      },

      {
        path: 'contacts/create',
        component: FormComponent,
      },

      {
        path: 'contacts/:id',
        component: FormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
