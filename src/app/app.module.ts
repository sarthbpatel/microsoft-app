import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ForBusinessComponent } from './For Business/forbusiness.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { LinksComponent } from './links/links.component';
import { FooterComponent } from './navigation/footnavbar/footer.component';
import { SecondFooterComponent } from './navigation/footnavbar/secondfootnavbar/secondfooter.component';
import { TopNavBarComponent } from './navigation/topnavbar/topnavbar.component';
import { SurfaceComponent } from './surface/surface.component';




@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    SecondFooterComponent,
    LinksComponent,
    SurfaceComponent,
    JumbotronComponent,
    ForBusinessComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
