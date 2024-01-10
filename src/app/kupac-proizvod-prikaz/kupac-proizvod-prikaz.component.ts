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

}
