import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {ShowPageComponent} from "./show-page/show-page.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {ReservationComponent} from "./reservation/reservation.component";
import {ShowContentComponent} from "./dashboard-agence/show-content/show-content.component";
import {ResevationManagerComponent} from "./dashboard-agence/resevation-manager/resevation-manager.component";
import {UserComponent} from "./dashboard-agence/user/user.component";
import {TableauBordComponent} from "./dashboard-agence/tableau-bord/tableau-bord.component";
import {AccueilDashboardComponent} from "./dashboard-agence/accueil-dashboard/accueil-dashboard.component";
import {LoginService} from "./login/service/login.service";
import {AccueilComponent} from "./accueil/accueil.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  { path: '', component: ShowPageComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'reservation', component: ReservationComponent},
  { path: 'dashboard', component: ShowContentComponent,
    children: [
      { path: 'acceuil', component: AccueilDashboardComponent},
      { path: 'tableau-bord', component: TableauBordComponent},
      { path: 'reservation', component: ResevationManagerComponent },
      { path: 'user', component: UserComponent}
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
