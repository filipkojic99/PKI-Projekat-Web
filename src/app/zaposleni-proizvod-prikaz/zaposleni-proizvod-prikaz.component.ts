import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';
import { Korisnik } from 'src/models/korisnik';
import { Proizvod } from 'src/models/proizvod';
import { KorisnikService } from 'src/services/korisnik.service';
import { ProizvodService } from 'src/services/proizvod.service';

@Component({
  selector: 'app-zaposleni-proizvod-prikaz',
  templateUrl: './zaposleni-proizvod-prikaz.component.html',
  styleUrls: ['./zaposleni-proizvod-prikaz.component.css']
})
export class ZaposleniProizvodPrikazComponent implements OnInit {

 // ulogovani korisnik
 ulogovani: Korisnik;
 // proizvod
 id: number;
 proizvod: Proizvod;

 trenutnoVreme:number = new Date().getTime();

 constructor(private proizvodService: ProizvodService,
   private korisnikService: KorisnikService, private toastr: ToastrService,
   private router: Router, private route: ActivatedRoute) { }

 async ngOnInit(): Promise<void> {
   this.ulogovani = this.korisnikService.dohvatiUlogovanogKorisnika();
   const params = await firstValueFrom(this.route.params);
   this.id = params['id'];
   this.proizvod = this.proizvodService.dohvatiProizodPoID(this.id);
 }

 promocija(id: number): void {
  this.router.navigate(['/zaposleniPromocija', id]);
}

}
