import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LinksComponent } from './links.component';
import { FooterComponent } from './footer.component';
import { Footer2Component } from './footer2.component';
import { TopNavBarComponent } from './topnavbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';
import { BottomCarouselComponent } from './bottomcarousel.component';
import { TopCarouselComponent } from './topcarousel.component';
import { COVIDJumbotronComponent } from './covidjumbotron.component';
import { ForBusinessComponent } from './forbusiness.component';
import { CommunityJumbotronComponent } from './community_jumbotron.component';
import { SurfaceCardComponent } from './surfacecard.component';
import { Microsoft365Component } from './topnavbar_routing/microsoft365.component';
import { OfficeComponent } from './topnavbar_routing/office.component';
import { WindowsComponent } from './topnavbar_routing/windows.component';
import { SurfaceNavComponent } from './topnavbar_routing/surface.component';
import { XBoxComponent } from './topnavbar_routing/xbox.component';
import { DealsComponent } from './topnavbar_routing/deals.component';
import { SupportComponent } from './topnavbar_routing/support.component';




@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    Microsoft365Component,
    OfficeComponent,
    WindowsComponent,
    SurfaceNavComponent,
    XBoxComponent,
    DealsComponent,
    SupportComponent,
    TopCarouselComponent,
    LinksComponent,
    HomeComponent,
    SurfaceCardComponent,
    CommunityJumbotronComponent,
    ForBusinessComponent,
    COVIDJumbotronComponent,
    BottomCarouselComponent,
    FooterComponent,
    Footer2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
