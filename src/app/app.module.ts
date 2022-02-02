import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './navigation/footnavbar/footer.component';
import { SecondFooterComponent } from './navigation/footnavbar/secondfootnavbar/secondfooter.component';
import { TopNavBarComponent } from './navigation/topnavbar/topnavbar.component';




@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    SecondFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
