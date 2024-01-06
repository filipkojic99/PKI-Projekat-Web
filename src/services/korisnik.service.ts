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
    return JSON.parse(localStorage.getItem("korisnici") || "[]");
  }

  pronadjiKorisnika(korisnicko_ime: string, lozinka: string): Korisnik | null {
    return this.korisnici.find(k => k.korisnicko_ime == korisnicko_ime && k.lozinka === lozinka) || null;
  }
}
