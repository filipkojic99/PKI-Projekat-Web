import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Korisnik } from 'src/models/korisnik';
import { Narudzbina } from 'src/models/narudzbina';
import { KorisnikService } from 'src/services/korisnik.service';
import { NarudzbinaService } from 'src/services/narudzbina.service';
import { ProizvodService } from 'src/services/proizvod.service';

@Component({
  selector: 'app-zaposleni-narudzbine',
  templateUrl: './zaposleni-narudzbine.component.html',
  styleUrls: ['./zaposleni-narudzbine.component.css']
})
export class ZaposleniNarudzbineComponent implements OnInit {

  narudzbine: Narudzbina[];
  korisnici: Korisnik[];

  constructor(private proizvodService: ProizvodService,
    private korisnikService: KorisnikService,
    private narudzbinaService: NarudzbinaService, private toastr: ToastrService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.narudzbine = this.narudzbinaService.dohvatiSveNarudzbine();
    this.korisnici = this.korisnikService.dohvatiKorisnike();
  }

  convertToDate(numOfMs: number) {
    return new Date(numOfMs);
  }

  nadjiKorisnickoIme(id:number):string {
    return this.korisnikService.pronadjiKorisnikaPoID(id).korisnicko_ime;
  }

}
