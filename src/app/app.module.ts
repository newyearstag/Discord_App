import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponentComponent } from './navigation/top-nav-bar-component/top-nav-bar-component.component';
import { FooterComponentComponent } from './navigation/footer-component/footer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponentComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
