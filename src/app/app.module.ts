import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SchoolsComponent } from './pages/schools/schools.component';

import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [
    AppComponent,
    SchoolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FieldsetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
