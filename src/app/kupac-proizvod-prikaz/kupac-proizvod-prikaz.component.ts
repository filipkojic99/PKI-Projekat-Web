import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';
import { Korisnik } from 'src/models/korisnik';
import { Proizvod } from 'src/models/proizvod';
import { KorisnikService } from 'src/services/korisnik.service';
import { ProizvodService } from 'src/services/proizvod.service';

@Component({
  selector: 'app-kupac-proizvod-prikaz',
  templateUrl: './kupac-proizvod-prikaz.component.html',
  styleUrls: ['./kupac-proizvod-prikaz.component.css']
})
export class KupacProizvodPrikazComponent implements OnInit {

   // ulogovani korisnik
   ulogovani: Korisnik;
   // proizvod
   id: number;
   proizvod: Proizvod;

   kolicina:number;

  constructor(private proizvodService: ProizvodService, 
    private korisnikService: KorisnikService, private toastr: ToastrService,
    private router: Router, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.ulogovani = this.korisnikService.dohvatiUlogovanogKorisnika();
    this.kolicina = 1;
    const params = await firstValueFrom(this.route.params);
    this.id = params['id'];
    this.proizvod = this.proizvodService.dohvatiProizodPoID(this.id);
  }

  povecajKolicinu():void {
    if (this.kolicina < 5) {
      this.kolicina++;
  }
  }

  smanjiKolicinu():void {
    if (this.kolicina > 1) {
      this.kolicina--;
  }
  }

  kupi(): void {
    const postojeciProizvodUKorpi = this.ulogovani.trenutna_korpa.find(item => item.idP == this.proizvod.id);
  
    if (postojeciProizvodUKorpi) {
      postojeciProizvodUKorpi.kolicina = this.kolicina;
      postojeciProizvodUKorpi.ukupna_cena = this.kolicina * this.proizvod.cena;
    } else {
      this.ulogovani.trenutna_korpa.push({
        idP: this.proizvod.id,
        kolicina: this.kolicina,
        cena: this.proizvod.cena,
        ukupna_cena: this.kolicina * this.proizvod.cena
      });
    }
    localStorage.setItem('ulogovani', JSON.stringify(this.ulogovani));
    this.korisnikService.azurirajKorpu(this.ulogovani.id, this.ulogovani.trenutna_korpa);
    this.toastr.success("", "Proizvod je dodat u korpu!");
  }
  

}
