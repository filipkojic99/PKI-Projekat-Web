export class Korisnik {
    id: number;
    korisnicko_ime: string;
    lozinka: string;
    ime: string;
    prezime: string;
    adresa: string;
    telefon: string;
    tip: string;
    trenutna_korpa: Array<{
        idP: number;
        kolicina: number;
        cena: number;
        ukupna_cena: number;
    }>;
}
