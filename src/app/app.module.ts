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
import { HederUlogovaniComponent } from './heder-ulogovani/heder-ulogovani.component';
import { MeniKupacComponent } from './meni-kupac/meni-kupac.component';
import { MeniZaposleniComponent } from './meni-zaposleni/meni-zaposleni.component';
import { KupacProfilComponent } from './kupac-profil/kupac-profil.component';
import { KupacAzuriranjeProfilComponent } from './kupac-azuriranje-profil/kupac-azuriranje-profil.component';
import { KupacAzuriranjeLozinkaComponent } from './kupac-azuriranje-lozinka/kupac-azuriranje-lozinka.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { KupacTorteComponent } from './kupac-torte/kupac-torte.component';
import { KupacKolaciComponent } from './kupac-kolaci/kupac-kolaci.component';
import { KupacProizvodPrikazComponent } from './kupac-proizvod-prikaz/kupac-proizvod-prikaz.component';
import { KupacProizvodKomentariComponent } from './kupac-proizvod-komentari/kupac-proizvod-komentari.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistracijaComponent,
    KupacPocetnaComponent,
    ZaposleniPocetnaComponent,
    HederUlogovaniComponent,
    MeniKupacComponent,
    MeniZaposleniComponent,
    KupacProfilComponent,
    KupacAzuriranjeProfilComponent,
    KupacAzuriranjeLozinkaComponent,
    ONamaComponent,
    KupacTorteComponent,
    KupacKolaciComponent,
    KupacProizvodPrikazComponent,
    KupacProizvodKomentariComponent
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
