import {Router, RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {ShowPageComponent} from "./show-page/show-page.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: ShowPageComponent },
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
