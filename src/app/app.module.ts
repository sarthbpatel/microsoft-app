import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LinksComponent } from './homepage/links.component';
import { FooterComponent } from './homepage/footer.component';
import { Footer2Component } from './homepage/footer2.component';
import { TopNavBarComponent } from './homepage/topnavbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';
import { BottomCarouselComponent } from './homepage/bottomcarousel.component';
import { TopCarouselComponent } from './homepage/topcarousel.component';
import { COVIDJumbotronComponent } from './homepage/covidjumbotron.component';
import { ForBusinessComponent } from './homepage/forbusiness.component';
import { CommunityJumbotronComponent } from './homepage/community_jumbotron.component';
import { SurfaceCardComponent } from './homepage/surfacecard.component';
import { Microsoft365Component } from './homepage/topnavbar_routing/microsoft365.component';
import { OfficeComponent } from './homepage/topnavbar_routing/office.component';
import { WindowsComponent } from './homepage/topnavbar_routing/windows.component';
import { SurfaceNavComponent } from './homepage/topnavbar_routing/surface.component';
import { XBoxComponent } from './homepage/topnavbar_routing/xbox.component';
import { DealsComponent } from './homepage/topnavbar_routing/deals.component';
import { SupportComponent } from './homepage/topnavbar_routing/support.component';




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
