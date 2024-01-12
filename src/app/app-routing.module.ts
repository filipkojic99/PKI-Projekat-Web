import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { KupacPocetnaComponent } from './kupac-pocetna/kupac-pocetna.component';
import { ZaposleniPocetnaComponent } from './zaposleni-pocetna/zaposleni-pocetna.component';
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
import { ZaposleniNarudzbinaPrikazComponent } from './zaposleni-narudzbina-prikaz/zaposleni-narudzbina-prikaz.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "registracija", component: RegistracijaComponent },
  { path: "kupac", component: KupacPocetnaComponent },
  { path: "kupacProfil", component: KupacProfilComponent },
  { path: "kupacAzuriranjeProfil", component: KupacAzuriranjeProfilComponent },
  { path: "kupacAzuriranjeLozinka", component: KupacAzuriranjeLozinkaComponent },
  { path: "oNama", component: ONamaComponent },
  { path: "kupacTorte", component: KupacTorteComponent },
  { path: "kupacKolaci", component: KupacKolaciComponent },
  { path: "kupacProizvodPrikaz/:id", component: KupacProizvodPrikazComponent },
  { path: "kupacProizvodKomentari/:id", component: KupacProizvodKomentariComponent },
  { path: "kupacKomentar/:id", component: KupacKomentarComponent },
  { path: "kupacKorpa", component: KupacKorpaComponent },
  { path: "kupacObavestenja", component: KupacObavestenjaComponent },
  { path: "kupacNarudzbinaPrikaz/:id", component: KupacNarudzbinaPrikazComponent },
  { path: "zaposleni", component: ZaposleniPocetnaComponent },
  { path: "zaposleniProfil", component: ZaposleniProfilComponent },
  { path: "zaposleniAzuriranjeProfil", component: ZaposleniAzuriranjeProfilComponent },
  { path: "zaposleniAzuriranjeLozinka", component: ZaposleniAzuriranjeLozinkaComponent },
  { path: "zaposleniTorte", component: ZaposleniTorteComponent },
  { path: "zaposleniKolaci", component: ZaposleniKolaciComponent },
  { path: "zaposleniProizvodPrikaz/:id", component: ZaposleniProizvodPrikazComponent },
  { path: "zaposleniProizvodKomentari/:id", component: ZaposleniProizvodKomentariComponent },
  { path: "zaposleniPromocija/:id", component: ZaposleniPromocijaComponent },
  { path: "zaposleniNarudzbine", component: ZaposleniNarudzbineComponent },
  { path: "zaposleniNarudzbinaPrikaz/:id", component: ZaposleniNarudzbinaPrikazComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
