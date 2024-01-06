import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { KupacPocetnaComponent } from './kupac-pocetna/kupac-pocetna.component';
import { ZaposleniPocetnaComponent } from './zaposleni-pocetna/zaposleni-pocetna.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "registracija", component: RegistracijaComponent },
  { path: "kupac", component: KupacPocetnaComponent },
  { path: "zaposleni", component: ZaposleniPocetnaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
