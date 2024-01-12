import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';
import { Korisnik } from 'src/models/korisnik';
import { Narudzbina } from 'src/models/narudzbina';
import { Proizvod } from 'src/models/proizvod';
import { KorisnikService } from 'src/services/korisnik.service';
import { NarudzbinaService } from 'src/services/narudzbina.service';
import { ProizvodService } from 'src/services/proizvod.service';

@Component({
  selector: 'app-zaposleni-narudzbina-prikaz',
  templateUrl: './zaposleni-narudzbina-prikaz.component.html',
  styleUrls: ['./zaposleni-narudzbina-prikaz.component.css']
})
export class ZaposleniNarudzbinaPrikazComponent implements OnInit {

  id: number;
  narudzbina: Narudzbina;
  proizvodi: Proizvod[];
  ukupnoSve: number = 0;

  korisnici: Korisnik[];

  constructor(private proizvodService: ProizvodService,
    private korisnikService: KorisnikService,
    private narudzbinaService: NarudzbinaService, private toastr: ToastrService,
    private router: Router, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    const params = await firstValueFrom(this.route.params);
    this.id = params['id'];
    this.narudzbina = this.narudzbinaService.dohvatiNarudzbinuPoID(this.id);
    this.proizvodi = this.proizvodService.dohvatiProizvode();
    this.narudzbina.sadrzaj.forEach(elem => this.ukupnoSve += elem.ukupna_cena);
    this.korisnici = this.korisnikService.dohvatiKorisnike();
  }

  pronadjiNazivProizvod(id: number): string {
    return this.proizvodi.find(proizvod => proizvod.id == id).naziv;
  }

  prihvati(): void {
    this.narudzbinaService.promeniStatusNarudzbineIObavestiKorisnika(
      this.id, this.narudzbina.idKor,"prihvaceno"
    );
    this.toastr.success("", "Uspešno prihvaćena narudžbina!");
    this.router.navigate(["zaposleniNarudzbine"]);
  }

  odbij(): void {
    this.narudzbinaService.promeniStatusNarudzbineIObavestiKorisnika(
      this.id, this.narudzbina.idKor,"odbijeno"
    );
    this.toastr.success("", "Uspešno odbijena narudžbina!");
    this.router.navigate(["zaposleniNarudzbine"]);
  }


}
