import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponentComponent } from './navigation/top-nav-bar-component/top-nav-bar-component.component';
import { FooterComponentComponent } from './navigation/footer-component/footer-component.component';
import { CarouselComponent } from './body/carousel/carousel.component';
import { CardsComponent } from './navigation/cards/cards.component';
import { Lab3ShoppingCardsComponent } from './navigation/lab3-shopping-cards/lab3-shopping-cards.component';
import { HomeLayoutComponent } from './Layouts/HOME-layout/home-layout.component';
import { MensPantsLayoutComponent } from './Layouts/mens-pants-layout/mens-pants-layout.component';
import { KurtasLayoutComponent } from './Layouts/kurtas-layout/kurtas-layout.component';
import { DressesComponent } from './Layouts/dresses/dresses.component';
import { WorkReadyShoesLayoutComponent } from './Layouts/work-ready-shoes-layout/work-ready-shoes-layout.component';
import { CasualShoesFlipflopsLayoutComponent } from './Layouts/casual-shoes-flipflops-layout/casual-shoes-flipflops-layout.component';
import { FlatsAndHeelsComponent } from './Layouts/flats-and-heels/flats-and-heels.component';
import { DinnerwareKitchenwareLayoutComponent } from './Layouts/dinnerware-kitchenware-layout/dinnerware-kitchenware-layout.component';
import { AccessoriesLayoutComponent } from './Layouts/accessories-layout/accessories-layout.component';
import { NaturalCareLayoutComponent } from './Layouts/natural-care-layout/natural-care-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponentComponent,
    FooterComponentComponent,
    CarouselComponent,
    CardsComponent,
    Lab3ShoppingCardsComponent,
    HomeLayoutComponent,
    MensPantsLayoutComponent,
    KurtasLayoutComponent,
    DressesComponent,
    WorkReadyShoesLayoutComponent,
    CasualShoesFlipflopsLayoutComponent,
    FlatsAndHeelsComponent,
    DinnerwareKitchenwareLayoutComponent,
    AccessoriesLayoutComponent,
    NaturalCareLayoutComponent
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
