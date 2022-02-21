import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopCarouselComponent } from './carousel/topcarousel/topcarousel.component';
import { ForBusinessComponent } from './For Business/forbusiness.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { LinksComponent } from './links/links.component';
import { FooterComponent } from './navigation/footnavbar/footer.component';
import { SecondFooterComponent } from './navigation/footnavbar/secondfootnavbar/secondfooter.component';
import { TopNavBarComponent } from './navigation/topnavbar/topnavbar.component';
import { SurfaceComponent } from './surface/surface.component';
import { AppRoutingModule } from './app-routing.module';
import { Microsoft365Component } from './navigation/topnavbar/Routing left-menu/microsoft365.component';
import { HomeComponent } from './home.component';
import { OfficeComponent } from './navigation/topnavbar/Routing left-menu/office.component';
import { WindowsComponent } from './navigation/topnavbar/Routing left-menu/windows.component';
import { SurfaceNavComponent } from './navigation/topnavbar/Routing left-menu/surface.component';
import { XBoxComponent } from './navigation/topnavbar/Routing left-menu/xbox.component';
import { DealsComponent } from './navigation/topnavbar/Routing left-menu/deals.component';
import { SupportComponent } from './navigation/topnavbar/Routing left-menu/support.component';
import { COVIDJumbotronComponent } from './COVID-19 jumbotron/jumbotron.component';
import { BottomCarouselComponent } from './carousel/bottomcarousel/bottomcarousel.component';




@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    SecondFooterComponent,
    LinksComponent,
    SurfaceComponent,
    JumbotronComponent,
    ForBusinessComponent,
    TopCarouselComponent,
    HomeComponent,
    Microsoft365Component,
    OfficeComponent,
    WindowsComponent,
    SurfaceNavComponent,
    XBoxComponent,
    DealsComponent,
    SupportComponent,
    COVIDJumbotronComponent,
    BottomCarouselComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
