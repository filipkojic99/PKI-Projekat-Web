import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { KorisnikService } from 'src/services/korisnik.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  korisnicko_ime: string = "";
  lozinka: string = "";
  ime: string = "";
  prezime: string = "";
  adresa: string = "";
  telefon: string = "";

  constructor(private korisnikService: KorisnikService, private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  registracija(): void {
    if (this.korisnicko_ime == "" || this.lozinka == "" || this.ime == "" ||
      this.prezime == "" || this.adresa == "" || this.telefon == "") {
      this.toastr.error("", "Popunite sva polja!");
      return;
    }

    // provera da li je broj telefona u trazenom formatu
    if (/^\+381 \d{2} \d{7}$/.test(this.telefon) == false) {
      this.toastr.error("", "Broj telefona nije u dobrom formatu!");
      return;
    }

    // provera da li su ime, prezime, korisnicko ime i lozinka duzine do 20 karaktera
    const MAX_LEN: number = 20;
    if (this.ime.length > MAX_LEN || this.prezime.length > MAX_LEN ||
      this.korisnicko_ime.length > MAX_LEN || this.lozinka.length > MAX_LEN) {
      this.toastr.error("", "Polja ime, prezime, korisničko ime i lozinka moraju biti dužine do 20 karaktera!");
      return;
    }

    let korisnici = this.korisnikService.dohvatiKorisnike();
    if (korisnici.some(k => k.korisnicko_ime === this.korisnicko_ime)) {
      this.toastr.error("", "Korisničko ime je zauzeto!");
      return;
    }

    const data = {
      ime: this.ime,
      prezime: this.prezime,
      korisnicko_ime: this.korisnicko_ime,
      lozinka: this.lozinka,
      adresa: this.adresa,
      telefon: this.telefon
    }
    this.korisnikService.dodajKorisnika(data);
    this.router.navigate([""]);
    this.toastr.success("", "Uspešna registracija!");
  }

}
