import { Injectable } from '@angular/core';
import { Narudzbina } from 'src/models/narudzbina';

@Injectable({
  providedIn: 'root'
})
export class NarudzbinaService {

  private narudzbine: Narudzbina[];

  constructor() { 
    if (!localStorage.getItem("narudzbine")) {
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
            { idP: 9, kolicina: 5, cena: 70, ukupna_cena: 5 * 70 } // Šampita
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
  }

  dodajNarudzbinu(idK:number, trenutna_korpa: Array<{
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
}
