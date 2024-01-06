import { Injectable } from '@angular/core';
import { Proizvod } from 'src/models/proizvod';

@Injectable({
    providedIn: 'root'
})
export class ProizvodService {

    private proizvodi: Proizvod[];

    constructor() {
        if (!localStorage.getItem("proizvodi")) {
            const pocetniProizvodi: Proizvod[] = [
                new Proizvod(
                    1,
                    "Čoko krofna",
                    "Čoko krofna je neodoljiva slastica punjena bogatim čokoladnim filom, idealna za ljubitelje čokolade.",
                    "Pšenično brašno, jaja, šećer, mleko, tamna čokolada, maslac, prašak za pecivo, vanilin šećer.",
                    "coko krofna.png",
                    150,
                    [],
                    new Date().getTime(),
                    new Date().getTime(),
                    120,
                    "Uživajte u našoj neodoljivoj čoko krofni sa bogatim punjenjem.",
                    true
                ),
                new Proizvod(
                    2,
                    "Torta sa jagodom",
                    "Torta sa jagodom je osvežavajući dezert, savršen spoj kremastog fila i svežih jagoda.",
                    "Jaja, šećer, brašno, sveže jagode, krem sir, šlag, vanilin šećer.",
                    "torta jagoda.png",
                    300,
                    [],
                    new Date().getTime(),
                    new Date().getTime(),
                    250,
                    "Probajte našu osvežavajuću tortu sa jagodama, idealnu za tople dane.",
                    true
                ),
                new Proizvod(
                    3,
                    "Mafin sa vanilom",
                    "Mafin sa vanilom je klasična slastica, mekan i vazdušast, sa nežnim ukusom vanile.",
                    "Pšenično brašno, jaja, šećer, mleko, vanilin ekstrakt, maslac, prašak za pecivo.",
                    "mafin vanila cokolada.png",
                    100,
                    [],
                    new Date().getTime(),
                    new Date().getTime(),
                    80,
                    "Uživajte u našim mekanim mafinima sa bogatim ukusom vanile.",
                    true
                )
            ];
            localStorage.setItem("proizvodi", JSON.stringify(pocetniProizvodi));
            this.proizvodi = pocetniProizvodi;
        }
        else {
            this.proizvodi = JSON.parse(localStorage.getItem("proizvodi"));
        }
    }

    dohvatiProizvode(): Proizvod[] {
        return this.proizvodi;
    }

    dohvatiPromocije(): Proizvod[] {
        return this.proizvodi.filter(proizvod => proizvod.naPromociji == true);
    }

}
