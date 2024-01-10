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

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "registracija", component: RegistracijaComponent },
  { path: "kupac", component: KupacPocetnaComponent },
  { path: "zaposleni", component: ZaposleniPocetnaComponent },
  { path: "kupacProfil", component: KupacProfilComponent },
  { path: "kupacAzuriranjeProfil", component: KupacAzuriranjeProfilComponent },
  { path: "kupacAzuriranjeLozinka", component: KupacAzuriranjeLozinkaComponent },
  { path: "oNama", component: ONamaComponent },
  { path: "kupacTorte", component: KupacTorteComponent },
  { path: "kupacKolaci", component: KupacKolaciComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
