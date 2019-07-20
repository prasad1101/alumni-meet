import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './myMeet/com/shared/header/header.component';
import { FooterComponent } from './myMeet/com/shared/footer/footer.component';
import { LandingPageComponent } from './myMeet/com/landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './myMeet/com/landing-page/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    LoginComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
