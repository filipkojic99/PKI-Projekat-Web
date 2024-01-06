import { Injectable } from '@angular/core';
import { Korisnik } from 'src/models/korisnik';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  private korisnici: Korisnik[] = [
    {
      id: 1,
      korisnicko_ime: "ana",
      lozinka: "123",
      ime: "Ana",
      prezime: "Jovanović",
      adresa: "Dunavski Kej 20, Beograd",
      telefon: "+381 66 5080848",
      tip: "kupac",
      trenutna_korpa: []
    },
    {
      id: 2,
      korisnicko_ime: "filip",
      lozinka: "123",
      ime: "Filip",
      prezime: "Kojić",
      adresa: "Solunska 12, Beograd",
      telefon: "+381 66 2030989",
      tip: "zaposleni",
      trenutna_korpa: []
    },
  ];


  constructor() {
    if (!localStorage.getItem("korisnici")) {
      localStorage.setItem("korisnici", JSON.stringify(this.korisnici));
    }
    else {
      this.korisnici = JSON.parse(localStorage.getItem("korisnici"));
    }
  }

  dohvatiKorisnike(): Korisnik[] {
    return this.korisnici;
  }

  pronadjiKorisnika(korisnicko_ime: string, lozinka: string): Korisnik | null {
    return this.korisnici.find(k => k.korisnicko_ime == korisnicko_ime && k.lozinka === lozinka) || null;
  }

  dodajKorisnika(data): void {
    const noviKorisnik:Korisnik = new Korisnik();
    noviKorisnik.id = this.korisnici[this.korisnici.length - 1].id + 1;
    noviKorisnik.ime = data.ime;
    noviKorisnik.prezime = data.prezime;
    noviKorisnik.korisnicko_ime = data.korisnicko_ime;
    noviKorisnik.lozinka = data.lozinka;
    noviKorisnik.telefon = data.telefon;
    noviKorisnik.adresa = data.adresa;
    noviKorisnik.tip = "kupac";
    noviKorisnik.trenutna_korpa = [];
    this.korisnici.push(noviKorisnik);
    localStorage.setItem('korisnici', JSON.stringify(this.korisnici));
  }
}
