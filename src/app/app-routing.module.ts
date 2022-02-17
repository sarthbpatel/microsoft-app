import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Microsoft365Component } from './navigation/topnavbar/Routing left-menu/microsoft365.component';
import { HomeComponent } from './home.component';
import { OfficeComponent } from './navigation/topnavbar/Routing left-menu/office.component';
import { WindowsComponent } from './navigation/topnavbar/Routing left-menu/windows.component';
import { SurfaceNavComponent } from './navigation/topnavbar/Routing left-menu/surface.component';
import { XBoxComponent } from './navigation/topnavbar/Routing left-menu/xbox.component';
import { DealsComponent } from './navigation/topnavbar/Routing left-menu/deals.component';
import { SupportComponent } from './navigation/topnavbar/Routing left-menu/support.component';

const routes:Routes = [
  {path:'', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'microsoft365', component: Microsoft365Component},
  {path: 'office', component: OfficeComponent},
  {path: 'windows', component: WindowsComponent},
  {path: 'surface', component: SurfaceNavComponent},
  {path: 'xbox', component: XBoxComponent},
  {path: 'deals', component: DealsComponent},
  {path: 'support', component: SupportComponent},



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

