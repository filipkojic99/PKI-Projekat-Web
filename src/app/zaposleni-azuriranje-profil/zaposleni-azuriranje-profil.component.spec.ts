import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposleniAzuriranjeProfilComponent } from './zaposleni-azuriranje-profil.component';

describe('ZaposleniAzuriranjeProfilComponent', () => {
  let component: ZaposleniAzuriranjeProfilComponent;
  let fixture: ComponentFixture<ZaposleniAzuriranjeProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaposleniAzuriranjeProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaposleniAzuriranjeProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
