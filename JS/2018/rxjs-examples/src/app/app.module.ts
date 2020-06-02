import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FakeObservablesService } from './fake-observables.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    FakeObservablesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
