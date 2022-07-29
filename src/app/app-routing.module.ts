import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormNextMissionComponent } from './form-next-mission/form-next-mission.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IndexShowPlanetesComponent } from './index-show-planetes/index-show-planetes.component';
import { ShowVehiculesComponent } from './show-vehicules/show-vehicules.component';
import { ShowPersonnesComponent } from './show-personnes/show-personnes.component';

const routes: Routes = [
  // un objet
  { path: '', component: HomePageComponent},
  { path: 'planets', component: IndexShowPlanetesComponent},
  { path: 'vehicles', component: ShowVehiculesComponent},
  { path: 'form-next-mission', component: FormNextMissionComponent},
  { path: 'personnes', component: ShowPersonnesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
