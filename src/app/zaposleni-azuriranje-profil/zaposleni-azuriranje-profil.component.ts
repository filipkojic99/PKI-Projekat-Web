import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Korisnik } from 'src/models/korisnik';
import { KorisnikService } from 'src/services/korisnik.service';
import { ProizvodService } from 'src/services/proizvod.service';

@Component({
  selector: 'app-zaposleni-azuriranje-profil',
  templateUrl: './zaposleni-azuriranje-profil.component.html',
  styleUrls: ['./zaposleni-azuriranje-profil.component.css']
})
export class ZaposleniAzuriranjeProfilComponent implements OnInit {

 // ulogovani korisnik
 ulogovani: Korisnik;

 ime: string = "";
 prezime: string = "";
 korisnickoIme: string = "";
 adresa: string = "";
 telefon: string = "";

 constructor(private proizvodService: ProizvodService, 
   private korisnikService: KorisnikService,private toastr: ToastrService,
   private router: Router) { }

 ngOnInit(): void {
   this.ulogovani = this.korisnikService.dohvatiUlogovanogKorisnika();
   this.ime = this.ulogovani.ime;
   this.prezime = this.ulogovani.prezime;
   this.korisnickoIme = this.ulogovani.korisnicko_ime;
   this.adresa = this.ulogovani.adresa;
   this.telefon = this.ulogovani.telefon;
 }

 azurirajProfil(): void {
   if (this.ime == "" || this.prezime == "" || this.korisnickoIme == ""
    || this.telefon == "") {
     this.toastr.error("", "Popunite sva polja!");
     return;
   }
 
   const korisnik = this.korisnikService.pronadjiKorisnikaPoImenu(this.korisnickoIme);
   if (korisnik && korisnik.id !== this.ulogovani.id) {
     this.toastr.error("", "Korisničko ime je zauzeto!");
     return;
   }
 
   if (/^\+381 \d{2} \d{7}$/.test(this.telefon) == false) {
     this.toastr.error("", "Broj telefona nije u dobrom formatu!");
     return;
   }
 
   if (this.ime.length > 20 || this.prezime.length > 20 || this.korisnickoIme.length > 20) {
     this.toastr.error("", "Polja ime, prezime i korisničko ime ne smeju biti duža od 20 znakova!");
     return;
   }
 
   this.korisnikService.azurirajProfil(this.ulogovani.id, this.ime, this.prezime, this.korisnickoIme, this.adresa, this.telefon);  
   this.toastr.success("", "Uspešno ažuriranje!");
   this.router.navigate(["zaposleniProfil"]);
 }
}
