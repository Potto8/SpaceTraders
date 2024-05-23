import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegistrationFormComponent } from './features/component/registration-form/registration-form.component';
import { FactiondetailComponent } from './features/component/factiondetail/factiondetail.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './features/component/login/login.component';
import { HomeComponent } from './features/component/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    FactiondetailComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
