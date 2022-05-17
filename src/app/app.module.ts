import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { LineUpsComponent } from './line-ups/line-ups.component';
import { LogoComponent } from './logo/logo.component';
import { MapasComponent } from './mapas/mapas.component';
import { AimComponent } from './aim/aim.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LeftMenuComponent,
    LineUpsComponent,
    LogoComponent,
    MapasComponent,
    AimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
