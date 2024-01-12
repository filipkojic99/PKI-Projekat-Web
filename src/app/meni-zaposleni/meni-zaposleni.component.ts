import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meni-zaposleni',
  templateUrl: './meni-zaposleni.component.html',
  styleUrls: ['./meni-zaposleni.component.css']
})
export class MeniZaposleniComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  zaposleni(): void {
    this.router.navigate(["zaposleni"]);
  }

  zaposleniTorte(): void {
    this.router.navigate(["zaposleniTorte"]);
  }

  zaposleniKolaci(): void {
    this.router.navigate(["zaposleniKolaci"]);
  }

  zaposleniProfil(): void {
    this.router.navigate(["zaposleniProfil"]);
  }

  zaposleniNarudzbine(): void {
    this.router.navigate(["zaposleniNarudzbine"]);
  }

  logout(): void {
    localStorage.removeItem("ulogovani");
    this.router.navigate([""]);
  }

}
