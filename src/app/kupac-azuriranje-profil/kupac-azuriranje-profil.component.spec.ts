import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupacAzuriranjeProfilComponent } from './kupac-azuriranje-profil.component';

describe('KupacAzuriranjeProfilComponent', () => {
  let component: KupacAzuriranjeProfilComponent;
  let fixture: ComponentFixture<KupacAzuriranjeProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupacAzuriranjeProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KupacAzuriranjeProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
