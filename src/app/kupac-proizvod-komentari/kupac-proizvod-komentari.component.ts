import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';
import { Korisnik } from 'src/models/korisnik';
import { Proizvod } from 'src/models/proizvod';
import { KorisnikService } from 'src/services/korisnik.service';
import { ProizvodService } from 'src/services/proizvod.service';

@Component({
  selector: 'app-kupac-proizvod-komentari',
  templateUrl: './kupac-proizvod-komentari.component.html',
  styleUrls: ['./kupac-proizvod-komentari.component.css']
})
export class KupacProizvodKomentariComponent implements OnInit {

  // proizvod
  id: number;
  proizvod: Proizvod;
  korisnici: Korisnik[];

  constructor(private proizvodService: ProizvodService, 
    private korisnikService: KorisnikService, private toastr: ToastrService,
    private router: Router, private route: ActivatedRoute) { }

    async ngOnInit(): Promise<void> {
      const params = await firstValueFrom(this.route.params);
      this.id = params['id'];
      this.proizvod = this.proizvodService.dohvatiProizodPoID(this.id);
      this.korisnici = this.korisnikService.dohvatiKorisnike();
    }

    nadjiKorisnickoIme(id: number) {
      return this.korisnici.find(korisnik => korisnik.id == id).korisnicko_ime;
    }

    convertToDate(numOfMs: number) {
      return new Date(numOfMs);
    }

}
