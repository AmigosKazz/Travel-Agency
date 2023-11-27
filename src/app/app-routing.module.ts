import {Router, RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {ShowPageComponent} from "./show-page/show-page.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {ReservationComponent} from "./reservation/reservation.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: ShowPageComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'reservation', component: ReservationComponent}
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
