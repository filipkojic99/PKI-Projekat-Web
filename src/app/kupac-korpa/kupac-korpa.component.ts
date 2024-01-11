import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Korisnik } from 'src/models/korisnik';
import { Proizvod } from 'src/models/proizvod';
import { KorisnikService } from 'src/services/korisnik.service';
import { NarudzbinaService } from 'src/services/narudzbina.service';
import { ProizvodService } from 'src/services/proizvod.service';

@Component({
  selector: 'app-kupac-korpa',
  templateUrl: './kupac-korpa.component.html',
  styleUrls: ['./kupac-korpa.component.css']
})
export class KupacKorpaComponent implements OnInit {

  ulogovani: Korisnik;
  proizvodi: Proizvod[];
  ukupno: number = 0;

  constructor(private proizvodService: ProizvodService,
    private korisnikService: KorisnikService,
    private narudzbinaService: NarudzbinaService, private toastr: ToastrService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ulogovani = this.korisnikService.dohvatiUlogovanogKorisnika();
    this.proizvodi = this.proizvodService.dohvatiProizvode();
    this.ulogovani.trenutna_korpa.forEach(elem => this.ukupno += elem.ukupna_cena)
  }

  nadjiNazivProizvoda(id: number): string {
    return this.proizvodi.find(proizvod => proizvod.id == id).naziv;
  }

  ukloni(idProizvoda: number): void {
    this.ulogovani.trenutna_korpa = this.ulogovani.trenutna_korpa.filter(stavka => stavka.idP != idProizvoda);
    this.ukupno = this.ulogovani.trenutna_korpa.reduce((total, stavka) => total + stavka.ukupna_cena, 0);
    localStorage.setItem('ulogovani', JSON.stringify(this.ulogovani));
    this.korisnikService.azurirajKorpu(this.ulogovani.id, this.ulogovani.trenutna_korpa);
  }

  naruci(): void {
    this.narudzbinaService.dodajNarudzbinu(this.ulogovani.id, this.ulogovani.trenutna_korpa)
    this.ulogovani.trenutna_korpa = [];
    localStorage.setItem('ulogovani', JSON.stringify(this.ulogovani));
    this.korisnikService.azurirajKorpu(this.ulogovani.id, this.ulogovani.trenutna_korpa);
    this.toastr.success('Narudžbina je primljena!');
    this.router.navigate(["kupac"]);
  }

}
