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

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: ShowPageComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'reservation', component: ReservationComponent},
  { path: 'dashboard', component: ShowContentComponent},
  { path: 'reservation-management', component: ResevationManagerComponent },
  { path: 'user', component: UserComponent },
  { path: 'tableau-bord', component: TableauBordComponent},
  { path: '', redirectTo: '/table-bord', pathMatch: 'full'}
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
