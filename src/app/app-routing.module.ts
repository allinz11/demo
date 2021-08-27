import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from './log/log.component';
import { AccountsComponent } from './main/accounts/accounts.component';
import { FormComponent } from './main/form/form.component';
import { MainComponent } from './main/main.component';

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
        component: AccountsComponent,
      },

      {
        path: 'accounts/:id',
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
