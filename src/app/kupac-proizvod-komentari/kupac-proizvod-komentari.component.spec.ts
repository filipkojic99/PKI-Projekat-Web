import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupacProizvodKomentariComponent } from './kupac-proizvod-komentari.component';

describe('KupacProizvodKomentariComponent', () => {
  let component: KupacProizvodKomentariComponent;
  let fixture: ComponentFixture<KupacProizvodKomentariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupacProizvodKomentariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KupacProizvodKomentariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
