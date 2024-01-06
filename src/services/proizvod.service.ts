import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProizvodService {

  private proizvodi: Proizvod[] = [
    new Proizvod(
        1,
        "Torta 1",
        "Opis torte 1",
        "Sastav torte 1",
        "assets/slika1.jpg",
        1200,
        [],
        new Date().getTime(),
        new Date().getTime(),
        1000,
        "Promocija 1",
        true
    ),
    // Dodajte ostale proizvode...
];

constructor() {
    if (!localStorage.getItem("proizvodi")) {
        localStorage.setItem("proizvodi", JSON.stringify(this.proizvodi));
    }
    else {
        this.proizvodi = JSON.parse(localStorage.getItem("proizvodi"));
    }
}

dohvatiProizvode(): Proizvod[] {
    return this.proizvodi;
}

}
