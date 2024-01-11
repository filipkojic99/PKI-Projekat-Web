export class Obavestenje {
    id: number;
    idKor: number;
    idNar: number;
    datumVreme: number;

    constructor(
        id: number,
        idKor: number,
        idNar: number,
        datumVreme: number
    ) {
        this.id = id;
        this.idKor = idKor;
        this.idNar = idNar;
        this.datumVreme = datumVreme;
    }
}
