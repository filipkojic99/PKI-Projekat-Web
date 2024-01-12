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
import { KupacKomentarComponent } from './kupac-komentar/kupac-komentar.component';
import { KupacKorpaComponent } from './kupac-korpa/kupac-korpa.component';
import { KupacObavestenjaComponent } from './kupac-obavestenja/kupac-obavestenja.component';
import { KupacNarudzbinaPrikazComponent } from './kupac-narudzbina-prikaz/kupac-narudzbina-prikaz.component';
import { ZaposleniProfilComponent } from './zaposleni-profil/zaposleni-profil.component';
import { ZaposleniAzuriranjeProfilComponent } from './zaposleni-azuriranje-profil/zaposleni-azuriranje-profil.component';
import { ZaposleniAzuriranjeLozinkaComponent } from './zaposleni-azuriranje-lozinka/zaposleni-azuriranje-lozinka.component';
import { ZaposleniTorteComponent } from './zaposleni-torte/zaposleni-torte.component';
import { ZaposleniKolaciComponent } from './zaposleni-kolaci/zaposleni-kolaci.component';
import { ZaposleniProizvodPrikazComponent } from './zaposleni-proizvod-prikaz/zaposleni-proizvod-prikaz.component';
import { ZaposleniProizvodKomentariComponent } from './zaposleni-proizvod-komentari/zaposleni-proizvod-komentari.component';
import { ZaposleniPromocijaComponent } from './zaposleni-promocija/zaposleni-promocija.component';
import { ZaposleniNarudzbineComponent } from './zaposleni-narudzbine/zaposleni-narudzbine.component';

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
    KupacProizvodKomentariComponent,
    KupacKomentarComponent,
    KupacKorpaComponent,
    KupacObavestenjaComponent,
    KupacNarudzbinaPrikazComponent,
    ZaposleniProfilComponent,
    ZaposleniAzuriranjeProfilComponent,
    ZaposleniAzuriranjeLozinkaComponent,
    ZaposleniTorteComponent,
    ZaposleniKolaciComponent,
    ZaposleniProizvodPrikazComponent,
    ZaposleniProizvodKomentariComponent,
    ZaposleniPromocijaComponent,
    ZaposleniNarudzbineComponent
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
