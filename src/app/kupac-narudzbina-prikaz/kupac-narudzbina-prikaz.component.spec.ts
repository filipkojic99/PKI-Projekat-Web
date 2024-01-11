import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupacNarudzbinaPrikazComponent } from './kupac-narudzbina-prikaz.component';

describe('KupacNarudzbinaPrikazComponent', () => {
  let component: KupacNarudzbinaPrikazComponent;
  let fixture: ComponentFixture<KupacNarudzbinaPrikazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupacNarudzbinaPrikazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KupacNarudzbinaPrikazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
