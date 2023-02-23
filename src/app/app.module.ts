import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponentComponent } from './navigation/top-nav-bar-component/top-nav-bar-component.component';
import { FooterComponentComponent } from './navigation/footer-component/footer-component.component';
import { CarouselComponent } from './body/carousel/carousel.component';
import { CardsComponent } from './navigation/cards/cards.component';
import { Lab3ShoppingCardsComponent } from './navigation/lab3-shopping-cards/lab3-shopping-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponentComponent,
    FooterComponentComponent,
    CarouselComponent,
    CardsComponent,
    Lab3ShoppingCardsComponent
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
