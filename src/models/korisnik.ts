export class Korisnik {
    id: number;
    korisnicko_ime: string;
    ime: string;
    prezime: string;
    adresa: string;
    lozinka: string;
    telefon: string;
    tip: string;
    trenutna_korpa: Array<{
        idP: number;
        kolicina: number;
        cena: number;
        ukupna_cena: number;
    }>;

    constructor(
        id: number,
        korisnicko_ime: string,
        lozinka: string,
        ime: string,
        prezime: string,
        adresa: string,
        telefon: string,
        tip: string,
        trenutna_korpa: Array<{
            idP: number;
            kolicina: number;
            cena: number;
            ukupna_cena: number;
        }>
    ) {
        this.id = id;
        this.korisnicko_ime = korisnicko_ime;
        this.ime = ime;
        this.prezime = prezime;
        this.adresa = adresa;
        this.lozinka = lozinka;
        this.telefon = telefon;
        this.tip = tip;
        this.trenutna_korpa = trenutna_korpa;
    }
}
