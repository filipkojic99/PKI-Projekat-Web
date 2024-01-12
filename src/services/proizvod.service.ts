import { Injectable } from '@angular/core';
import { Proizvod } from 'src/models/proizvod';

@Injectable({
    providedIn: 'root'
})
export class ProizvodService {

    private proizvodi: Proizvod[];

    constructor() {
        // Inicijalizacija datuma za početak promocije
        let datumPocetkaPromocije = new Date();
        datumPocetkaPromocije.setHours(0, 0, 0, 0); // Podešavanje na početak dana (00:00)

        // Inicijalizacija datuma za kraj promocije
        let datumKrajaPromocije = new Date(datumPocetkaPromocije);
        datumKrajaPromocije.setDate(datumPocetkaPromocije.getDate() + 3); // Dodavanje 3 dana
        
        if (!localStorage.getItem("proizvodi")) {
            const pocetniProizvodi: Proizvod[] = [
                // promocije
                new Proizvod(
                    1,
                    "Čoko krofna",
                    "kolac",
                    "Čoko krofna je neodoljiva slastica punjena bogatim čokoladnim filom, idealna za ljubitelje čokolade.",
                    "Pšenično brašno, jaja, šećer, mleko, tamna čokolada, maslac, prašak za pecivo, vanilin šećer.",
                    "coko krofna.png",
                    150,
                    [],
                    datumPocetkaPromocije.getTime(),
                    datumKrajaPromocije.getTime(),
                    120,
                    "Uživajte u našoj neodoljivoj čoko krofni sa bogatim punjenjem.",
                    true
                ),
                new Proizvod(
                    2,
                    "Torta sa jagodom",
                    "torta",
                    "Torta sa jagodom je osvežavajući dezert, savršen spoj kremastog fila i svežih jagoda.",
                    "Jaja, šećer, brašno, sveže jagode, krem sir, šlag, vanilin šećer.",
                    "torta jagoda.png",
                    300,
                    [],
                    datumPocetkaPromocije.getTime(),
                    datumKrajaPromocije.getTime(),
                    250,
                    "Probajte našu osvežavajuću tortu sa jagodama, idealnu za tople dane.",
                    true
                ),
                new Proizvod(
                    3,
                    "Mafin sa vanilom",
                    "kolac",
                    "Mafin sa vanilom je klasična slastica, mekan i vazdušast, sa nežnim ukusom vanile.",
                    "Pšenično brašno, jaja, šećer, mleko, vanilin ekstrakt, maslac, prašak za pecivo.",
                    "mafin vanila cokolada.png",
                    100,
                    [],
                    datumPocetkaPromocije.getTime(),
                    datumKrajaPromocije.getTime(),
                    80,
                    "Uživajte u našim mekanim mafinima sa bogatim ukusom vanile.",
                    true
                ),
                // torte
                new Proizvod(
                    4,
                    "Afrika",
                    "torta",
                    "Afrika torta je čokoladni užitak sa bogatim slojevima i neodoljivim ukusom.",
                    "Tamna čokolada, jaja, šećer, brašno, maslac, kaka prah.",
                    "afrika.jpg",
                    300,
                    [
                        { idKor: 1, tekst: "Najukusnija torta ikada!", datumVreme: new Date("2023-08-10T13:30:00").getTime() },
                        { idKor: 3, tekst: "Savršeno se topi u ustima, preporučujem!", datumVreme: new Date("2023-08-14T15:55:00").getTime() },
                        { idKor: 4, tekst: "Afrika torta je moj novi favorit.", datumVreme: new Date("2023-08-15T17:30:00").getTime() },
                        { idKor: 3, tekst: "Čokoladna fantazija, odlična je!", datumVreme: new Date("2023-08-19T12:21:00").getTime() },
                        { idKor: 4, tekst: "Jako dobra, čokolada je prvorazredna.", datumVreme: new Date("2023-09-17T23:15:00").getTime() },
                        { idKor: 1, tekst: "Za sve ljubitelje čokolade, morate probati!", datumVreme: new Date("2023-10-22T18:02:00").getTime() }
                    ],
                    null,
                    null,
                    null,
                    "",
                    false
                ),
                new Proizvod(
                    5,
                    "Banana torta",
                    "torta",
                    "Banana torta je savršena kombinacija mekog biskvita i kremastog fila sa bananama.",
                    "Jaja, šećer, brašno, banane, vanilin šećer, slatka pavlaka.",
                    "banana.webp",
                    280,
                    [],
                    null,
                    null,
                    null,
                    "",
                    false
                ),
                new Proizvod(
                    6,
                    "Sladoled torta",
                    "torta",
                    "Naša sladoled torta je osvežavajuća poslastica, idealna za tople dane.",
                    "Sladoled raznih ukusa, voće, biskvit, čokolada.",
                    "sladoled.webp",
                    320,
                    [],
                    null,
                    null,
                    null,
                    "",
                    false
                ),
                new Proizvod(
                    7,
                    "Ananas torta",
                    "torta",
                    "Ananas torta je lagana i osvežavajuća, sa nežnim ukusom ananasa.",
                    "Ananas, šlag, biskvit, jaja, šećer.",
                    "ananas.jpg",
                    270,
                    [],
                    null,
                    null,
                    null,
                    "",
                    false
                ),
                // kolaci
                new Proizvod(
                    8,
                    "Indijaner",
                    "kolac",
                    "Indijaner je tradicionalni kolač, poznat po svojoj mekoći i bogatom ukusu.",
                    "Biskvit, čokolada, krem, šećer, jaja.",
                    "indijaner.webp",
                    80,
                    [],
                    null,
                    null,
                    null,
                    "",
                    false
                ),
                new Proizvod(
                    9,
                    "Šampita",
                    "kolac",
                    "Šampita je lagani kolač sa slojevima pufnastog fila i nežnog biskvita.",
                    "Biskvit, belanca, šećer, limunov sok.",
                    "sampita.webp",
                    70,
                    [],
                    null,
                    null,
                    null,
                    "",
                    false
                ),
                new Proizvod(
                    10,
                    "Baklava",
                    "kolac",
                    "Baklava je tradicionalni orijentalni kolač, bogat orasima i sirupom.",
                    "Tanki listovi tijesta, orasi, šećerni sirup, maslac, limun.",
                    "baklava.jpg",
                    100,
                    [],
                    null,
                    null,
                    null,
                    "",
                    false
                ),
                new Proizvod(
                    11,
                    "Kinder kocka",
                    "kolac",
                    "Kinder kocka je dečja omiljena poslastica, bogata ukusom čokolade i mleka.",
                    "Čokolada, mleko, šećer, jaja, brašno, kakao.",
                    "kinder kocka.jpg",
                    90,
                    [],
                    null,
                    null,
                    null,
                    "",
                    false
                ),
                new Proizvod(
                    12,
                    "Boem torta",
                    "torta",
                    "Boem torta je bogata i ukusna poslastica, savršen spoj čokolade i kafe koji mami sva čula.",
                    "Jaja, šećer, brašno, tamna čokolada, jaka kafa, maslac, kakao prah, čokolada za glazuru.",
                    "boem.jpg",
                    250,
                    [],
                    null,
                    null,
                    null,
                    "",
                    false
                )

            ];
            localStorage.setItem("proizvodi", JSON.stringify(pocetniProizvodi));
            this.proizvodi = pocetniProizvodi;
        }
        else {
            this.proizvodi = JSON.parse(localStorage.getItem("proizvodi"));
        }
        this.azurirajPromocije();
    }

    azurirajPromocije(): void {
        const trenutnoVreme = new Date().getTime();
      
        this.proizvodi.forEach(proizvod => {
          if (proizvod.datumKrajaPromocije && trenutnoVreme > proizvod.datumKrajaPromocije) {
            proizvod.datumPocetkaPromocije = null;
            proizvod.datumKrajaPromocije = null;
            proizvod.promotivnaCena = null;
            proizvod.opisPromocije = "";
            proizvod.naPromociji = false;
          }
        });
        localStorage.setItem("proizvodi", JSON.stringify(this.proizvodi));
      }

    dohvatiProizvode(): Proizvod[] {
        return this.proizvodi;
    }

    dohvatiPromocije(): Proizvod[] {
        return this.proizvodi.filter(proizvod => proizvod.naPromociji == true);
    }

    dohvatiTorte(): Proizvod[] {
        return this.proizvodi.filter(proizvod => proizvod.vrsta == "torta");
    }

    dohvatiKolace(): Proizvod[] {
        return this.proizvodi.filter(proizvod => proizvod.vrsta == "kolac");
    }

    dohvatiProizodPoID(id: number): Proizvod {
        return this.proizvodi.find(proizvod => proizvod.id == id);
    }

}
