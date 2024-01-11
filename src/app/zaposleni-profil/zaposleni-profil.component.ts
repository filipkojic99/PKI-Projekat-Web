import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Korisnik } from 'src/models/korisnik';
import { KorisnikService } from 'src/services/korisnik.service';
import { ProizvodService } from 'src/services/proizvod.service';

@Component({
  selector: 'app-zaposleni-profil',
  templateUrl: './zaposleni-profil.component.html',
  styleUrls: ['./zaposleni-profil.component.css']
})
export class ZaposleniProfilComponent implements OnInit {

  // ulogovani korisnik
  loggedIn: Korisnik;

  constructor(private proizvodService: ProizvodService, 
    private korisnikService: KorisnikService,private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.loggedIn = this.korisnikService.dohvatiUlogovanogKorisnika();
  }
}
