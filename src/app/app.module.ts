import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IndexShowPlanetesComponent } from './index-show-planetes/index-show-planetes.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexPlanetsComponent } from './index-show-planetes/index-planets/index-planets.component';
import { ShowVehiculesComponent } from './show-vehicules/show-vehicules.component';
import { VehiculesComponent } from './show-vehicules/vehicules/vehicules.component';
import { FormNextMissionComponent } from './form-next-mission/form-next-mission.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowPersonnesComponent } from './show-personnes/show-personnes.component';
import { PersonnesComponent } from './show-personnes/personnes/personnes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    IndexShowPlanetesComponent,
    IndexPlanetsComponent,
    ShowVehiculesComponent,
    VehiculesComponent,
    FormNextMissionComponent,
    ShowPersonnesComponent,
    PersonnesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
