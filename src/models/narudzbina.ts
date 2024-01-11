export class Narudzbina {
    id: number;
    idKor: number;
    sadrzaj: Array<{
      idP: number;
      kolicina: number;
      cena: number;
      ukupna_cena: number;
    }>;
    datumNarucivanja: number;
    status: string;
  
    constructor(
      id: number,
      idKor: number,
      sadrzaj: Array<{
        idP: number;
        kolicina: number;
        cena: number;
        ukupna_cena: number;
      }>,
      datumNarucivanja: number,
      status: string
    ) {
      this.id = id;
      this.idKor = idKor;
      this.sadrzaj = sadrzaj;
      this.datumNarucivanja = datumNarucivanja;
      this.status = status;
    }
  }
  