import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { LogComponent } from './log/log.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/demo.reducer';
import { RouterModule } from '@angular/router';
import { FormComponent } from './main/form/form.component';
import { TablesComponent } from './main/tables/tables.component';

@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    MainComponent,
    TablesComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ appState: appReducer }),
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
