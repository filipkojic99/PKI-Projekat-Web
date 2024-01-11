import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposleniProizvodKomentariComponent } from './zaposleni-proizvod-komentari.component';

describe('ZaposleniProizvodKomentariComponent', () => {
  let component: ZaposleniProizvodKomentariComponent;
  let fixture: ComponentFixture<ZaposleniProizvodKomentariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaposleniProizvodKomentariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaposleniProizvodKomentariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
