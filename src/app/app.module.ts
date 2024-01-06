import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { KupacPocetnaComponent } from './kupac-pocetna/kupac-pocetna.component';
import { ZaposleniPocetnaComponent } from './zaposleni-pocetna/zaposleni-pocetna.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistracijaComponent,
    KupacPocetnaComponent,
    ZaposleniPocetnaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass: "toast-top-center",
      preventDuplicates: true,
      timeOut: 3000,
      closeButton: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
