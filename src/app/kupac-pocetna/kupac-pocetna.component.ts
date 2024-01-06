import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proizvod } from 'src/models/proizvod';
import { KorisnikService } from 'src/services/korisnik.service';
import { ProizvodService } from 'src/services/proizvod.service';

import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-kupac-pocetna',
  templateUrl: './kupac-pocetna.component.html',
  styleUrls: ['./kupac-pocetna.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(600 )
      ]),
      transition(':leave',
        animate(600, style({ opacity: 0 })))
    ])
  ]
})
export class KupacPocetnaComponent implements OnInit, OnDestroy {

  promocije: Proizvod[];
  trenutnaPromocija: Proizvod;
  trenutnaPromocijaIndex: number = 0;
  intervalId: any;
  stateExpression: string;

  constructor(private proizvodService: ProizvodService, private toastr: ToastrService,
    private router: Router) { }

    ngOnInit(): void {
      this.promocije = this.proizvodService.dohvatiProizvode();
      this.updatePromotionDisplay();
      this.rotirajPromocije();
    }
    
    updatePromotionDisplay(): void {
      this.stateExpression = 'in'; // Set the initial state
      this.trenutnaPromocija = this.promocije[this.trenutnaPromocijaIndex];
    }
    
    rotirajPromocije(): void {
      this.intervalId = setInterval(() => {
        this.sledecaPromocija();
        this.updatePromotionDisplay(); // Update the displayed promotion
      }, 5000);
    }
    

  sledecaPromocija(): void {
    this.trenutnaPromocijaIndex = (this.trenutnaPromocijaIndex + 1) % this.promocije.length;
    this.stateExpression = 'in'; // This will reset the state and trigger the animation
  }
  
  prethodnaPromocija(): void {
    this.trenutnaPromocijaIndex = (this.trenutnaPromocijaIndex - 1 + this.promocije.length) % this.promocije.length;
    this.stateExpression = 'in'; // This will reset the state and trigger the animation
  }
  

  applyTransitionEffect(): void {
    // Apply your transition effect logic here, for example, fade in/out
    // You can implement this with Angular animations or by toggling CSS classes
  }

  changeAnimationState() {
    this.stateExpression = this.stateExpression === 'state1' ? 'state2' : 'state1';
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}
