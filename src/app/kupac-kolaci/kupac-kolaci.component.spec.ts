import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupacKolaciComponent } from './kupac-kolaci.component';

describe('KupacKolaciComponent', () => {
  let component: KupacKolaciComponent;
  let fixture: ComponentFixture<KupacKolaciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupacKolaciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KupacKolaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
