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
import { SurfaceNavComponent } from './topnavbar_routing/surfacenav/surfacenav.component';
import { XboxComponent } from './topnavbar_routing/xbox/xbox.component';
import { Microsoft365Component } from './topnavbar_routing/microsoft365/microsoft365.component';
import { DealsComponent } from './topnavbar_routing/deals/deals.component';
import { OfficeComponent } from './topnavbar_routing/office/office.component';
import { WindowsComponent } from './topnavbar_routing/windows/windows.component';
import { SupportComponent } from './topnavbar_routing/support/support.component';
import { SocialLinksComponent } from './sociallinks.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavBarComponent,
    Microsoft365Component,
    OfficeComponent,
    WindowsComponent,
    SurfaceNavComponent,
    XboxComponent,
    DealsComponent,
    TopCarouselComponent,
    LinksComponent,
    SurfaceCardComponent,
    CommunityJumbotronComponent,
    ForBusinessComponent,
    COVIDJumbotronComponent,
    BottomCarouselComponent,
    SocialLinksComponent,
    FooterComponent,
    Footer2Component,
    SupportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
