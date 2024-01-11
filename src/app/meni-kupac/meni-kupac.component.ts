import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Korisnik } from 'src/models/korisnik';
import { Obavestenje } from 'src/models/obavestenje';
import { KorisnikService } from 'src/services/korisnik.service';
import { NarudzbinaService } from 'src/services/narudzbina.service';
import { ProizvodService } from 'src/services/proizvod.service';

@Component({
  selector: 'app-meni-kupac',
  templateUrl: './meni-kupac.component.html',
  styleUrls: ['./meni-kupac.component.css']
})
export class MeniKupacComponent implements OnInit {

  ulogovani: Korisnik;
  obavestenja: Obavestenje[];

  constructor(private proizvodService: ProizvodService,
    private korisnikService: KorisnikService,
    private narudzbinaService: NarudzbinaService, private toastr: ToastrService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ulogovani = this.korisnikService.dohvatiUlogovanogKorisnika();
    this.obavestenja = this.narudzbinaService.dohvatiObavestenjaZaKorisnika(this.ulogovani.id);
    console.log(this.obavestenja.length)
  }

  kupac(): void {
    this.router.navigate(["kupac"]);
  }

  kupacTorte(): void {
    this.router.navigate(["kupacTorte"]);
  }

  kupacKolaci(): void {
    this.router.navigate(["kupacKolaci"]);
  }

  kupacProfil(): void {
    this.router.navigate(["kupacProfil"]);
  }

  kupacKorpa(): void {
    this.router.navigate(["kupacKorpa"]);
  }

  kupacObavestenja(): void {
    this.router.navigate(["kupacObavestenja"]);
  }

  kupacONama(): void {
    this.router.navigate(["oNama"]);
  }

  logout(): void {
    localStorage.removeItem("ulogovani");
    this.router.navigate([""]);
  }

}
