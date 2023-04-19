import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { HashLocationStrategy, LocationStrategy } from '@angular/common';

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
import { ShopByCategoryComponent } from './body/shop-by-category/shop-by-category.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './navigation/user-info/user-info.component';
import { AddProductComponent } from './Layouts/add-product/add-product.component'
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';




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
    NaturalCareLayoutComponent,
    ShopByCategoryComponent,
    UserInfoComponent,
    AddProductComponent
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  //{provide: LocationStrategy, useClass: HashLocationStrategy}
  bootstrap: [AppComponent]
})
export class AppModule { }
