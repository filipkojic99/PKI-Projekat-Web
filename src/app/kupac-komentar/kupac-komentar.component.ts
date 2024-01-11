import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';
import { Korisnik } from 'src/models/korisnik';
import { Proizvod } from 'src/models/proizvod';
import { KorisnikService } from 'src/services/korisnik.service';
import { ProizvodService } from 'src/services/proizvod.service';

@Component({
  selector: 'app-kupac-komentar',
  templateUrl: './kupac-komentar.component.html',
  styleUrls: ['./kupac-komentar.component.css']
})
export class KupacKomentarComponent implements OnInit {

  ulogovani: Korisnik;
  // proizvod
  id: number;
  proizvod: Proizvod;
  tekstKomentara: string = "";

  constructor(private proizvodService: ProizvodService,
    private korisnikService: KorisnikService, private toastr: ToastrService,
    private router: Router, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    const params = await firstValueFrom(this.route.params);
    this.id = params['id'];
    this.ulogovani = this.korisnikService.dohvatiUlogovanogKorisnika();
    this.proizvod = this.proizvodService.dohvatiProizodPoID(this.id);
  }

  ostaviKomentar(): void {
    if (this.tekstKomentara == "") {
      this.toastr.error("", "Popunite polje za komentar!");
      return;
    }

    const noviKomentar = {
      idKor: this.ulogovani.id,
      tekst: this.tekstKomentara,
      datumVreme: new Date().getTime()
    };
    this.proizvod.komentari.push(noviKomentar);

    localStorage.setItem("proizvodi", JSON.stringify(this.proizvodService.dohvatiProizvode()));
    this.toastr.success("", "Uspešno dodat komentar!");
    this.router.navigate([`kupacProizvodKomentari/${this.id}`]);
  }

}
