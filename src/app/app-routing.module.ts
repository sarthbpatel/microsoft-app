import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Microsoft365Component } from './topnavbar_routing/microsoft365/microsoft365.component';
import { HomeComponent } from './home.component';
import { OfficeComponent } from './topnavbar_routing/office/office.component';
import { WindowsComponent } from './topnavbar_routing/windows.component';
import { SurfaceNavComponent } from './topnavbar_routing/surfacenav/surfacenav.component';
import { XBoxComponent } from './topnavbar_routing/xbox.component';
import { DealsComponent } from './topnavbar_routing/deals/deals.component';
import { SupportComponent } from './topnavbar_routing/support/support.component';

const routes:Routes = [
  {path:'', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'microsoft365', component: Microsoft365Component},
  {path: 'office', component: OfficeComponent},
  {path: 'windows', component: WindowsComponent},
  {path: 'surface', component: SurfaceNavComponent},
  {path: 'xbox', component: XBoxComponent},
  {path: 'deals', component: DealsComponent},
  {path: 'support', component: SupportComponent}

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

