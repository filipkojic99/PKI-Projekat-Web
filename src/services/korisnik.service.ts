import { Injectable } from '@angular/core';
import { Korisnik } from 'src/models/korisnik';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  private korisnici: Korisnik[];


  constructor() {
    if (!localStorage.getItem("korisnici")) {
      const pocetniKorisnici: Korisnik[] = [
        new Korisnik(1, "ana", "123", "Ana", "Jovanović", "Dunavski Kej 20, Beograd", "+381 66 5080848", "kupac", []),
        new Korisnik(2, "filip", "123", "Filip", "Kojić", "Solunska 12, Beograd", "+381 66 2030989", "zaposleni", [])
      ];
      localStorage.setItem("korisnici", JSON.stringify(pocetniKorisnici));
      this.korisnici = pocetniKorisnici;
    } else {
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
    const noviId = this.korisnici.length > 0 ? this.korisnici[this.korisnici.length - 1].id + 1 : 1;
    const noviKorisnik = new Korisnik(
      noviId,
      data.korisnicko_ime,
      data.lozinka,
      data.ime,
      data.prezime,
      data.adresa,
      data.telefon,
      "kupac",
      []
    );
    this.korisnici.push(noviKorisnik);
    localStorage.setItem('korisnici', JSON.stringify(this.korisnici));
  }

}
