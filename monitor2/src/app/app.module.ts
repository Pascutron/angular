import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EnvironmentListComponent } from './environment-list/environment-list.component';
import { EnvironmentDetailsComponent } from './environment-details/environment-details.component';

import { appRouterModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    EnvironmentListComponent,
    EnvironmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
