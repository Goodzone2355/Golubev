import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { InfoComponent } from './info/info.component';
import { AboutyouselfComponent } from './aboutyouself/aboutyouself.component';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    InfoComponent,
    AboutyouselfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
