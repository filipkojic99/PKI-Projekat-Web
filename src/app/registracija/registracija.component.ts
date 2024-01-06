import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  registracija() {
    
  }

}
