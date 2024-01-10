import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupacProizvodPrikazComponent } from './kupac-proizvod-prikaz.component';

describe('KupacProizvodPrikazComponent', () => {
  let component: KupacProizvodPrikazComponent;
  let fixture: ComponentFixture<KupacProizvodPrikazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupacProizvodPrikazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KupacProizvodPrikazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
