import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducers';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterBtnComponent } from './counter/counter-btn/counter-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({counter: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
