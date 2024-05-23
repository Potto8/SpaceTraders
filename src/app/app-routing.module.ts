import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationFormComponent} from "./features/component/registration-form/registration-form.component";
import {LoginComponent} from "./features/component/login/login.component";
import {HomeComponent} from "./features/component/home/home.component";

const routes: Routes = [
  { path: '**', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'registration', component: RegistrationFormComponent },
  { path: 'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
