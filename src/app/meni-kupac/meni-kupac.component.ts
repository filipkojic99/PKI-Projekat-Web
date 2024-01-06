import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meni-kupac',
  templateUrl: './meni-kupac.component.html',
  styleUrls: ['./meni-kupac.component.css']
})
export class MeniKupacComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  kupac(): void {
    this.router.navigate(["kupac"]);
  }

  kupacTorte(): void {
    this.router.navigate(["kupacTorte"]);
  }

  kupacKolaci(): void {
    this.router.navigate(["kupacKolaci"]);
  }

  kupacProfil(): void {
    this.router.navigate(["kupacProfil"]);
  }

  kupacKorpa(): void {
    this.router.navigate(["kupacKorpa"]);
  }

  kupacObavestenja(): void {
    this.router.navigate(["kupacObavestenja"]);
  }

  kupacONama(): void {
    this.router.navigate(["kupacONama"]);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate([""]);
  }

}
