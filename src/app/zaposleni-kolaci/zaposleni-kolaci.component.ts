import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proizvod } from 'src/models/proizvod';
import { KorisnikService } from 'src/services/korisnik.service';
import { ProizvodService } from 'src/services/proizvod.service';

@Component({
  selector: 'app-zaposleni-kolaci',
  templateUrl: './zaposleni-kolaci.component.html',
  styleUrls: ['./zaposleni-kolaci.component.css']
})
export class ZaposleniKolaciComponent implements OnInit {

  kolaci: Proizvod[] = [];
  prikazaniKolaci: Proizvod[] = [];
  trenutnaStrana: number = 1;
  kolaciPoStrani: number = 3;
  ukupanBrojStrana: number;
  stranice: number[] = [];
  
  constructor(private proizvodService: ProizvodService, 
      private korisnikService: KorisnikService, private toastr: ToastrService,
      private router: Router) { }
  
  ngOnInit(): void {
      this.kolaci = this.proizvodService.dohvatiKolace();
      this.ukupanBrojStrana = Math.ceil(this.kolaci.length / this.kolaciPoStrani);
      this.inicijalizujStranice();
      this.azurirajPrikazKolača();
  }
  
  inicijalizujStranice(): void {
      this.stranice = Array.from({ length: this.ukupanBrojStrana }, (_, i) => i + 1);
  }
  
  azurirajPrikazKolača(): void {
      const startIndex = (this.trenutnaStrana - 1) * this.kolaciPoStrani;
      const endIndex = startIndex + this.kolaciPoStrani;
      this.prikazaniKolaci = this.kolaci.slice(startIndex, endIndex);
  }
  
  sledecaStrana(): void {
      if ((this.trenutnaStrana * this.kolaciPoStrani) >= this.kolaci.length) {
          this.trenutnaStrana = 1;
      } else {
          this.trenutnaStrana++;
      }
      this.azurirajPrikazKolača();
  }
  
  prethodnaStrana(): void {
      if (this.trenutnaStrana == 1) {
          this.trenutnaStrana = Math.ceil(this.kolaci.length / this.kolaciPoStrani);
      } else {
          this.trenutnaStrana--;
      }
      this.azurirajPrikazKolača();
  }
  
  idiNaStranicu(brojStranice: number): void {
      this.trenutnaStrana = brojStranice;
      this.azurirajPrikazKolača();
  }

}
