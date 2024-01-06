import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private korisnikService: KorisnikService, private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.korisnici = this.korisnikService.dohvatiKorisnike();
  }

  login(): void {
    if (this.korisnicko_ime == "" || this.lozinka == "") {
      this.toastr.error("", "Unesite kredencijale!");
      return;
    }
    const korisnik = this.korisnikService.pronadjiKorisnika(this.korisnicko_ime, this.lozinka);
    if (korisnik) {
      localStorage.setItem("ulogovani", JSON.stringify(korisnik));
      this.router.navigate([`/${korisnik.tip}`]);
    } else {
      this.toastr.error("", "Neispravni kredencijali!");
    }
  }

}
