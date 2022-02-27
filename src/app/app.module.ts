import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LinksComponent } from './links/links.component';
import { FooterComponent } from './navigation-bars/bottomnavbar/footer.component';
import { Footer2Component } from './navigation-bars/bottomnavbar/footer2.component';
import { TopNavBarComponent } from './navigation-bars/topnavbar/topnavbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';
import { BottomCarouselComponent } from './bottom-carousel/bottomcarousel.component';
import { TopCarouselComponent } from './top-carousel/topcarousel.component';
import { COVIDJumbotronComponent } from './covid-jumbotron/covidjumbotron.component';
import { ForBusinessComponent } from './forbusiness/forbusiness.component';
import { CommunityJumbotronComponent } from './community-jumbotron/community_jumbotron.component';
import { SurfaceCardComponent } from './surface-cards/surfacecard.component';
import { SurfaceNavComponent } from './navigation-bars/topnavbar/topnavbar_routing/surfacenav/surfacenav.component';
import { XboxComponent } from './navigation-bars/topnavbar/topnavbar_routing/xbox/xbox.component';
import { Microsoft365Component } from './navigation-bars/topnavbar/topnavbar_routing/microsoft365/microsoft365.component';
import { DealsComponent } from './navigation-bars/topnavbar/topnavbar_routing/deals/deals.component';
import { OfficeComponent } from './navigation-bars/topnavbar/topnavbar_routing/office/office.component';
import { WindowsComponent } from './navigation-bars/topnavbar/topnavbar_routing/windows/windows.component';
import { SupportComponent } from './navigation-bars/topnavbar/topnavbar_routing/support/support.component';
import { SocialLinksComponent } from './social-links/sociallinks.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';



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
    UserInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
