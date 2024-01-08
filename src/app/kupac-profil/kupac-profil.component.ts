import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Korisnik } from 'src/models/korisnik';
import { KorisnikService } from 'src/services/korisnik.service';
import { ProizvodService } from 'src/services/proizvod.service';

@Component({
  selector: 'app-kupac-profil',
  templateUrl: './kupac-profil.component.html',
  styleUrls: ['./kupac-profil.component.css']
})
export class KupacProfilComponent implements OnInit {

  // ulogovani korisnik
  loggedIn: Korisnik;

  constructor(private proizvodService: ProizvodService, 
    private korisnikService: KorisnikService,private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.loggedIn = this.korisnikService.dohvatiUlogovanogKorisnika();
  }

}
