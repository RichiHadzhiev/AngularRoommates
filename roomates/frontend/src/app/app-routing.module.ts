import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {ActivitiesComponent} from './pages/activities/activities.component';
import {SettingsComponent} from "./pages/settings/settings.component";
import {LoginComponent} from "./pages/login/login.component";


const routes: Routes = [
  { path: '',
    component: MainComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'activities', component: ActivitiesComponent},
      {path: 'settings', component: SettingsComponent},
      {path: '**', redirectTo: 'activities'}] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
