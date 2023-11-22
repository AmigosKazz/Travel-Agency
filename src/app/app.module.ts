import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AccueilComponent } from './accueil/accueil.component';
import { VoirPlusComponent } from './voir-plus/voir-plus.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    AccueilComponent,
    VoirPlusComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
