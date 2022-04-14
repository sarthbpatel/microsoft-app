import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Microsoft365Component } from './navigation-bars/topnavbar/topnavbar_routing/microsoft365/microsoft365.component';
import { HomeComponent } from './home.component';
import { OfficeComponent } from './navigation-bars/topnavbar/topnavbar_routing/office/office.component';
import { WindowsComponent } from './navigation-bars/topnavbar/topnavbar_routing/windows/windows.component';
import { SurfaceNavComponent } from './navigation-bars/topnavbar/topnavbar_routing/surfacenav/surfacenav.component';
import { DealsComponent } from './navigation-bars/topnavbar/topnavbar_routing/deals/deals.component';
import { SupportComponent } from './navigation-bars/topnavbar/topnavbar_routing/support/support.component';
import { XboxComponent } from './navigation-bars/topnavbar/topnavbar_routing/xbox/xbox.component';
import { AddProductComponent } from './forbusiness/add-product/add-product.component';
import { AuthenticationComponent } from './authentication/authentication.component';

const routes:Routes = [
  {path:'', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'microsoft365', component: Microsoft365Component},
  {path: 'office', component: OfficeComponent},
  {path: 'windows', component: WindowsComponent},
  {path: 'surface', component: SurfaceNavComponent},
  {path: 'xbox', component: XboxComponent},
  {path: 'deals', component: DealsComponent},
  {path: 'support', component: SupportComponent},
  {path: 'admin', component: AddProductComponent},
  {path: 'auth', component: AuthenticationComponent}


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
function forRoot(routes: Routes): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

