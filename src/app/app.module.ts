import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UnitDirective } from './unit.directive';
import { UnitPipe } from './unit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UnitDirective,
    UnitPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
