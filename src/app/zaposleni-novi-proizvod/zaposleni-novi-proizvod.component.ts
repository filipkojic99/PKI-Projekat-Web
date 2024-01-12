import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { KorisnikService } from 'src/services/korisnik.service';
import { NarudzbinaService } from 'src/services/narudzbina.service';
import { ProizvodService } from 'src/services/proizvod.service';

@Component({
  selector: 'app-zaposleni-novi-proizvod',
  templateUrl: './zaposleni-novi-proizvod.component.html',
  styleUrls: ['./zaposleni-novi-proizvod.component.css']
})
export class ZaposleniNoviProizvodComponent implements OnInit {

  naziv: string = "";
  tip: string = "";
  cena: number;
  opis: string = "";
  sastav: string = "";
  slika: string = "";

  constructor(private proizvodService: ProizvodService,
    private korisnikService: KorisnikService,
    private narudzbinaService: NarudzbinaService, private toastr: ToastrService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  picture: File = null;

  selectImage(event: Event): void {
    if ((event.target as HTMLInputElement).files?.length > 0) {
      const file = (event.target as HTMLInputElement).files[0];
      this.picture = file;
      // provera ispravnosti tipa
      if (this.validateFileType()) {
        this.slika = file.name.split(/(\\|\/)/g).pop(); // Dobijanje samo imena fajla
      }
    }
  }
  
  validateFileType(): boolean {
    const allowedExtensions = ['.png', '.jpg', '.jpeg'];
    const fileExtension = this.picture.name.slice(this.picture.name.lastIndexOf('.')).toLowerCase();
  
    if (!allowedExtensions.includes(fileExtension)) {
      this.toastr.error("", "Izaberite fajl sa validnom ekstenzijom (.png, .jpg, .jpeg).");
      this.picture = null;
      return false;
    }
    return true;
  }  

  /**
    * Provera unetih podataka
    * @returns {boolean}
    */
  checkInputValues(): boolean {
    // provera da li su unete sve vrednosti
    if (this.naziv == "" || this.tip == "" || this.opis == "" ||
      this.sastav == "" || this.slika == "") {
      this.toastr.error("", "Popunite sva polja!");
      return false;
    }

    if (this.naziv.length > 30) {
      this.toastr.error("", "Naziv ne sme biti duži od 30 karaktera!");
      return false;
    }

    // provera da li su ime, prezime, korisnicko ime i lozinka duzine do 20 karaktera
    const MAX_LEN: number = 200;
    if (this.sastav.length > MAX_LEN ||
      this.opis.length > MAX_LEN) {
      this.toastr.error("", "Polja sastav i opis moraju biti manje dužine od 200 karaktera!");
      return false;
    }

    if (isNaN(this.cena) || this.cena < 0) {
      this.toastr.error("", "Niste izabrali validnu vrednost za cenu!");
      return false;
    }

    return true;
  }

  dodaj() {
    // provera da li su sve unete vrednosti validne
    if (this.checkInputValues() == false) { return; }

    const data = {
      naziv: this.naziv,
      tip: this.tip,
      cena: this.cena,
      opis: this.opis,
      sastav: this.sastav,
      slika: this.slika,
    };
    this.proizvodService.dodajNoviProizvod(data);
    this.toastr.success("", "Uspešno dodat proizvod!");
    this.router.navigate(["zaposleni"]);
  }

}
