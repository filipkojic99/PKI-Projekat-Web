import { Component, OnInit } from '@angular/core';
import { Korisnik } from 'src/models/korisnik';
import { KorisnikService } from 'src/services/korisnik.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  korisnici: Korisnik[];

  korisnicko_ime: string = "";
  lozinka: string = "";

  constructor(private korisnikService: KorisnikService) { }

  ngOnInit(): void {
    this.korisnici = this.korisnikService.dohvatiKorisnike();
  }

  login(){
    
  }

}
