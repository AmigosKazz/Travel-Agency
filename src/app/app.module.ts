import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { VoirPlusComponent } from './voir-plus/voir-plus.component';
import { FooterComponent } from './footer/footer.component';
import {AppRoutingModule} from "./app-routing.module";
import { LoginComponent } from './login/login.component';
import { ShowPageComponent } from './show-page/show-page.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { InscriptionComponent } from './inscription/inscription.component';
import { ReservationComponent } from './reservation/reservation.component';
import { DashboardAgenceComponent } from './dashboard-agence/dashboard-agence.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    VoirPlusComponent,
    FooterComponent,
    LoginComponent,
    ShowPageComponent,
    InscriptionComponent,
    ReservationComponent,
    DashboardAgenceComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
