import { Injectable } from '@angular/core';
import { Narudzbina } from 'src/models/narudzbina';
import { Obavestenje } from 'src/models/obavestenje';

@Injectable({
  providedIn: 'root'
})
export class NarudzbinaService {

  private narudzbine: Narudzbina[];
  private obavestenja: Obavestenje[] = [];

  constructor() {
    if (!localStorage.getItem("narudzbine")) {
      // inicijalizacija narudzbina
      const pocetneNarudzbine: Narudzbina[] = [
        new Narudzbina(
          1,
          1,
          [
            { idP: 4, kolicina: 2, cena: 300, ukupna_cena: 2 * 300 }, // Afrika torta
            { idP: 8, kolicina: 3, cena: 80, ukupna_cena: 3 * 80 } // Indijaner
          ],
          new Date("2024-01-11T13:30:00").getTime(),
          "obrada"
        ),
        new Narudzbina(
          2,
          3,
          [
            { idP: 5, kolicina: 1, cena: 280, ukupna_cena: 280 }, // Banana torta
            { idP: 9, kolicina: 5, cena: 70, ukupna_cena: 5 * 70 } // Sampita
          ],
          new Date("2024-01-12T10:20:00").getTime(),
          "prihvaceno"
        ),
        new Narudzbina(
          3,
          4,
          [
            { idP: 6, kolicina: 1, cena: 320, ukupna_cena: 320 }, // Sladoled torta
            { idP: 10, kolicina: 4, cena: 100, ukupna_cena: 4 * 100 } // Baklava
          ],
          new Date("2024-01-13T15:40:00").getTime(),
          "odbijeno"
        )
      ];
      localStorage.setItem("narudzbine", JSON.stringify(pocetneNarudzbine));
      this.narudzbine = pocetneNarudzbine;
    } else {
      this.narudzbine = JSON.parse(localStorage.getItem("narudzbine"));
    }
    if (!localStorage.getItem("obavestenja")) {
      // Inicijalizacija obaveštenja
      const pocetnaObavestenja: Obavestenje[] = [
        new Obavestenje(
          1, // id obavestenja
          3, // idKor za korisnika Petra
          2, // idNar za narudžbinu koja je prihvaćena
          new Date("2024-01-12T10:25:00").getTime() // datum i vreme obaveštenja
        ),
        new Obavestenje(
          2, // id obavestenja
          4, // idKor za korisnika Milana
          3, // idNar za narudžbinu koja je odbijena
          new Date("2024-01-13T15:45:00").getTime() // datum i vreme obaveštenja
        )
      ];
      localStorage.setItem("obavestenja", JSON.stringify(pocetnaObavestenja));
      this.obavestenja = pocetnaObavestenja;
    } else {
      this.obavestenja = JSON.parse(localStorage.getItem("obavestenja"));
    }
  }

  dodajNarudzbinu(idK: number, trenutna_korpa: Array<{
    idP: number;
    kolicina: number;
    cena: number;
    ukupna_cena: number;
  }>): void {
    const noviId = this.narudzbine.length > 0 ? this.narudzbine[this.narudzbine.length - 1].id + 1 : 1;
    const novaNarudzbina = new Narudzbina(
      noviId,
      idK,
      trenutna_korpa,
      new Date().getTime(),
      "obrada"
    );
    this.narudzbine.push(novaNarudzbina);
    localStorage.setItem('narudzbine', JSON.stringify(this.narudzbine));
  }

  dohvatiNarudzbineZaKorisnika(id: number): Narudzbina[] {
    return this.narudzbine.filter(narudzbina => narudzbina.idKor == id);
  }

  dohvatiObavestenjaZaSve(): Obavestenje[] {
    return this.obavestenja;
  }

  dohvatiObavestenjaZaKorisnika(id: number): Obavestenje[] {
    return this.obavestenja.filter(obavestenje => obavestenje.idKor == id);
  }

}
