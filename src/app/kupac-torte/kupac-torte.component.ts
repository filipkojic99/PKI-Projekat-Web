import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proizvod } from 'src/models/proizvod';
import { KorisnikService } from 'src/services/korisnik.service';
import { ProizvodService } from 'src/services/proizvod.service';

@Component({
  selector: 'app-kupac-torte',
  templateUrl: './kupac-torte.component.html',
  styleUrls: ['./kupac-torte.component.css']
})
export class KupacTorteComponent implements OnInit {

  torte: Proizvod[] = [];
  prikazaneTorte: Proizvod[] = [];
  trenutnaStrana: number = 1;
  tortePoStrani: number = 3;
  ukupanBrojStrana: number;
  stranice: number[] = [];


  constructor(private proizvodService: ProizvodService, 
    private korisnikService: KorisnikService,private toastr: ToastrService,
    private router: Router) { }

    ngOnInit(): void {
      this.torte = this.proizvodService.dohvatiTorte();
      this.ukupanBrojStrana = Math.ceil(this.torte.length / this.tortePoStrani);
      this.inicijalizujStranice();
      this.azurirajPrikazTorti();
    }

    inicijalizujStranice(): void {
      this.stranice = Array.from({ length: this.ukupanBrojStrana }, (_, i) => i + 1);
    }
  
    azurirajPrikazTorti(): void {
      const startIndex = (this.trenutnaStrana - 1) * this.tortePoStrani;
      const endIndex = startIndex + this.tortePoStrani;
      this.prikazaneTorte = this.torte.slice(startIndex, endIndex);
    }
  
    sledecaStrana(): void {
      if ((this.trenutnaStrana * this.tortePoStrani) >= this.torte.length) {
        this.trenutnaStrana = 1;
      } else {
        this.trenutnaStrana++;
      }
      this.azurirajPrikazTorti();
    }
    
    prethodnaStrana(): void {
      if (this.trenutnaStrana == 1) {
        this.trenutnaStrana = Math.ceil(this.torte.length / this.tortePoStrani);
      } else {
        this.trenutnaStrana--;
      }
      this.azurirajPrikazTorti();
    }

    idiNaStranicu(brojStranice: number): void {
      this.trenutnaStrana = brojStranice;
      this.azurirajPrikazTorti();
    }
}
