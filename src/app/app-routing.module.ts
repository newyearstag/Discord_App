import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './Layouts/HOME-layout/home-layout.component';
import { KurtasLayoutComponent } from './Layouts/kurtas-layout/kurtas-layout.component';
import { DressesComponent } from './Layouts/dresses/dresses.component';
import { WorkReadyShoesLayoutComponent } from './Layouts/work-ready-shoes-layout/work-ready-shoes-layout.component';
import { CasualShoesFlipflopsLayoutComponent } from './Layouts/casual-shoes-flipflops-layout/casual-shoes-flipflops-layout.component';
import { FlatsAndHeelsComponent } from './Layouts/flats-and-heels/flats-and-heels.component';
import { DinnerwareKitchenwareLayoutComponent } from './Layouts/dinnerware-kitchenware-layout/dinnerware-kitchenware-layout.component';
import { AccessoriesLayoutComponent } from './Layouts/accessories-layout/accessories-layout.component';
import { NaturalCareLayoutComponent } from './Layouts/natural-care-layout/natural-care-layout.component';
import { MensPantsLayoutComponent } from './Layouts/mens-pants-layout/mens-pants-layout.component';
import { AddProductComponent } from './Layouts/add-product/add-product.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent
   },
   {
    path: 'admin',
    component: AddProductComponent
   },
   {
    path: 'KurtasLayout',
   component: KurtasLayoutComponent
  },
  {
    path: 'DressesLayout',
   component: DressesComponent
  },
  {
    path: 'WorkReadyShoesLayout',
   component: WorkReadyShoesLayoutComponent
  },
  {
    path: 'CasualShoesLayout',
   component: CasualShoesFlipflopsLayoutComponent
  },
  {
    path: 'FlatsAndHeels',
   component: FlatsAndHeelsComponent
  },
  {
    path: 'DinnerwareKitchenwareLayout',
   component: DinnerwareKitchenwareLayoutComponent
  },
  {
    path: 'AccessoriesLayout',
   component: AccessoriesLayoutComponent
  },
   {
    path: 'NaturalCareLayout',
   component: NaturalCareLayoutComponent
  },
  {
    path: 'MensPantsLayout',
   component: MensPantsLayoutComponent
  },
  { path: 'auth', component: AuthComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)
    /*, {
      useHash: true,
   }),*/
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
