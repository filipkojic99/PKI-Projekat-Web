class Proizvod {
    id: number;
    naziv: string;
    opis: string;
    sastav: string;
    slika: string;
    cena: number;
    komentari: Array<{ idKor: number, tekst: string, datumVreme: number }>;
    datumPocetkaPromocije: number;
    datumKrajaPromocije: number;
    promotivnaCena: number;
    opisPromocije: string;
    naPromociji: boolean;

    constructor(
        id: number,
        naziv: string,
        opis: string,
        sastav: string,
        slika: string,
        cena: number,
        komentari: Array<{ idKor: number, tekst: string, datumVreme: number }>,
        datumPocetkaPromocije: number,
        datumKrajaPromocije: number,
        promotivnaCena: number,
        opisPromocije: string,
        naPromociji: boolean
    ) {
        this.id = id;
        this.naziv = naziv;
        this.opis = opis;
        this.sastav = sastav;
        this.slika = slika;
        this.cena = cena;
        this.komentari = komentari;
        this.datumPocetkaPromocije = datumPocetkaPromocije;
        this.datumKrajaPromocije = datumKrajaPromocije;
        this.promotivnaCena = promotivnaCena;
        this.opisPromocije = opisPromocije;
        this.naPromociji = naPromociji;
    }
}
