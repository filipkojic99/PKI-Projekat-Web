import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';
import { Proizvod } from 'src/models/proizvod';
import { KorisnikService } from 'src/services/korisnik.service';
import { ProizvodService } from 'src/services/proizvod.service';

@Component({
  selector: 'app-zaposleni-promocija',
  templateUrl: './zaposleni-promocija.component.html',
  styleUrls: ['./zaposleni-promocija.component.css']
})
export class ZaposleniPromocijaComponent implements OnInit {

  // proizvod
  id: number;
  proizvod: Proizvod;

  startDate: string = "";
  endDate: string = "";
  startDateTimeMS: number;
  endDateTimeMS: number;
  opis: string = "";
  novaCena: number;

  constructor(private proizvodService: ProizvodService,
    private korisnikService: KorisnikService, private toastr: ToastrService,
    private router: Router, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    const params = await firstValueFrom(this.route.params);
    this.id = params['id'];
    this.proizvod = this.proizvodService.dohvatiProizodPoID(this.id);
  }

  /**
   * Postavljanje datuma u formi na sutrasnji.
   * @returns {string} Datum
   */
  getMinDate(): string {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return this.formatDate(tomorrow);
  }

  /**
   * Postavljanje maksimalnog datuma koji se moze izabrati na 3 nedelje u buducnosti.
   * @returns {string} Datum
   */
  getMaxDate(): string {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 14);
    return this.formatDate(maxDate);
  }

  /**
   * Formatiranje datuma.
   * @param {Date} date - Datum za formatiranje
   * @returns {string} Formatiran datum
   */
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  dodajNaPromociju(): void {

  }
}
