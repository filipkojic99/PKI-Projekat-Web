import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Korisnik } from 'src/models/korisnik';
import { Narudzbina } from 'src/models/narudzbina';
import { Obavestenje } from 'src/models/obavestenje';
import { KorisnikService } from 'src/services/korisnik.service';
import { NarudzbinaService } from 'src/services/narudzbina.service';
import { ProizvodService } from 'src/services/proizvod.service';

@Component({
  selector: 'app-kupac-obavestenja',
  templateUrl: './kupac-obavestenja.component.html',
  styleUrls: ['./kupac-obavestenja.component.css']
})
export class KupacObavestenjaComponent implements OnInit {

  ulogovani: Korisnik;
  obavestenja: Obavestenje[];
  svaObavestenja: Obavestenje[];
  idNarudzbinaSaObavestenjima: number[] = [];

  narudzbine: Narudzbina[];

  constructor(private proizvodService: ProizvodService,
    private korisnikService: KorisnikService,
    private narudzbinaService: NarudzbinaService, private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ulogovani = this.korisnikService.dohvatiUlogovanogKorisnika();
    this.obavestenja = this.narudzbinaService.dohvatiObavestenjaZaKorisnika(this.ulogovani.id);

    this.idNarudzbinaSaObavestenjima = this.obavestenja.map(obavestenje => obavestenje.idNar);

    this.svaObavestenja = this.narudzbinaService.dohvatiObavestenjaZaSve();
    this.svaObavestenja = this.svaObavestenja.filter(obavestenje => !this.idNarudzbinaSaObavestenjima.includes(obavestenje.idNar));
    localStorage.setItem("obavestenja", JSON.stringify(this.svaObavestenja));
    this.narudzbine = this.narudzbinaService.dohvatiNarudzbineZaKorisnika(this.ulogovani.id);
  }

  convertToDate(numOfMs: number) {
    return new Date(numOfMs);
  }

}
