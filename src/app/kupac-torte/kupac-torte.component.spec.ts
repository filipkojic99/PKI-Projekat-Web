import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupacTorteComponent } from './kupac-torte.component';

describe('KupacTorteComponent', () => {
  let component: KupacTorteComponent;
  let fixture: ComponentFixture<KupacTorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupacTorteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KupacTorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
