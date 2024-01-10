import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proizvod } from 'src/models/proizvod';
import { ProizvodService } from 'src/services/proizvod.service';

import { trigger, state, style, transition, animate } from '@angular/animations';
import { KorisnikService } from 'src/services/korisnik.service';

@Component({
  selector: 'app-kupac-pocetna',
  templateUrl: './kupac-pocetna.component.html',
  styleUrls: ['./kupac-pocetna.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2000ms ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class KupacPocetnaComponent implements OnInit, OnDestroy {

  promocije: Proizvod[];
  trenutnaPromocija: Proizvod;
  trenutnaPromocijaIndex: number = 0;
  intervalId: any;

  constructor(private proizvodService: ProizvodService, 
    private korisnikService: KorisnikService, private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.promocije = this.proizvodService.dohvatiPromocije();
    this.trenutnaPromocija = this.promocije[this.trenutnaPromocijaIndex];
    this.rotirajPromocije();
  }

  rotirajPromocije(): void {
    this.intervalId = setInterval(() => {
      this.trenutnaPromocijaIndex = (this.trenutnaPromocijaIndex + 1) % this.promocije.length;
      this.trenutnaPromocija = null; // Ukloni trenutnu promociju

      setTimeout(() => {
        this.trenutnaPromocija = this.promocije[this.trenutnaPromocijaIndex];
      }, 0); // Ponovo postavi promociju nakon kratkog intervala
    }, 5000);
  }

  sledecaPromocija(): void {
    this.trenutnaPromocijaIndex = (this.trenutnaPromocijaIndex + 1) % this.promocije.length;
    this.azurirajPromociju();
  }

  prethodnaPromocija(): void {
    this.trenutnaPromocijaIndex = (this.trenutnaPromocijaIndex - 1 + this.promocije.length) % this.promocije.length;
    this.azurirajPromociju();
  }

  azurirajPromociju(): void {
    this.trenutnaPromocija = null;
    setTimeout(() => {
      this.trenutnaPromocija = this.promocije[this.trenutnaPromocijaIndex];
      this.resetujInterval();
    }, 0);
  }

  resetujInterval(): void {
    clearInterval(this.intervalId);
    this.rotirajPromocije();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
