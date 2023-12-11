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
import { NavbarComponent } from './dashboard-agence/navbar/navbar.component';
import { ShowContentComponent } from './dashboard-agence/show-content/show-content.component';
import { ResevationManagerComponent } from './dashboard-agence/resevation-manager/resevation-manager.component';
import { TableauBordComponent } from './dashboard-agence/tableau-bord/tableau-bord.component';
import { UserComponent } from './dashboard-agence/user/user.component';
import { AccueilDashboardComponent } from './dashboard-agence/accueil-dashboard/accueil-dashboard.component';
import {MatDialogModule} from "@angular/material/dialog";
import { UserDialogComponent } from './dashboard-agence/user/user-dialog/user-dialog.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


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
    NavbarComponent,
    ShowContentComponent,
    ResevationManagerComponent,
    TableauBordComponent,
    UserComponent,
    AccueilDashboardComponent,
    UserDialogComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, MatDialogModule, MatButtonModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent, AccueilComponent, VoirPlusComponent, FooterComponent, LoginComponent, ShowPageComponent, InscriptionComponent, ReservationComponent, DashboardAgenceComponent, NavbarComponent, ShowContentComponent, ResevationManagerComponent, TableauBordComponent, UserComponent, AccueilDashboardComponent, UserDialogComponent]
})
export class AppModule {

}
