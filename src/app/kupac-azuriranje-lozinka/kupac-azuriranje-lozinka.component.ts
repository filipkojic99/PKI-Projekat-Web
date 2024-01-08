import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Korisnik } from 'src/models/korisnik';
import { KorisnikService } from 'src/services/korisnik.service';
import { ProizvodService } from 'src/services/proizvod.service';

@Component({
  selector: 'app-kupac-azuriranje-lozinka',
  templateUrl: './kupac-azuriranje-lozinka.component.html',
  styleUrls: ['./kupac-azuriranje-lozinka.component.css']
})
export class KupacAzuriranjeLozinkaComponent implements OnInit {

   ulogovani: Korisnik;
   lozinka: string = "";
   novaLozinka: string = "";
   potvrdaNovaLozinka: string = "";

  constructor(private proizvodService: ProizvodService, 
    private korisnikService: KorisnikService,private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.ulogovani = this.korisnikService.dohvatiUlogovanogKorisnika();
  }

  azurirajLozinku(): void {

    if (this.lozinka == "" || this.novaLozinka == "" || this.potvrdaNovaLozinka == "") {
      this.toastr.error("", "Popunite sva polja!");
      return;
    }
  
    if (this.ulogovani.lozinka != this.lozinka) {
      this.toastr.error("", "Neispravna trenutna lozinka!");
      return;
    }
  
    if (this.novaLozinka != this.potvrdaNovaLozinka) {
      this.toastr.error("", "Nova lozinka i potvrda nove lozinke se ne poklapaju!");
      return;
    }
  
    if (this.novaLozinka.length > 20) {
      this.toastr.error("", "Nova lozinka ne sme biti duža od 20 znakova!");
      return;
    }
  
    this.korisnikService.azurirajLozinku(this.ulogovani.id, this.novaLozinka);
    this.toastr.success("", "Lozinka je uspešno ažurirana!");
    this.router.navigate(["kupacProfil"]);
  }
  
}
