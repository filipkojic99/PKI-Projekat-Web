import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';
import { Narudzbina } from 'src/models/narudzbina';
import { Proizvod } from 'src/models/proizvod';
import { KorisnikService } from 'src/services/korisnik.service';
import { NarudzbinaService } from 'src/services/narudzbina.service';
import { ProizvodService } from 'src/services/proizvod.service';

@Component({
  selector: 'app-kupac-narudzbina-prikaz',
  templateUrl: './kupac-narudzbina-prikaz.component.html',
  styleUrls: ['./kupac-narudzbina-prikaz.component.css']
})
export class KupacNarudzbinaPrikazComponent implements OnInit {

  id: number;
  narudzbina: Narudzbina;
  proizvodi: Proizvod[];
  ukupnoSve:number = 0;

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
  }

  pronadjiNazivProizvod(id:number): string {
    return this.proizvodi.find(proizvod => proizvod.id == id).naziv;
  }

}
