import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { SocialFooterComponent } from './navigation/footer/social.footer.component';
import { TopNavBarComponent } from './navigation/topnavbar.component';




@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    SocialFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
