import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposleniAzuriranjeLozinkaComponent } from './zaposleni-azuriranje-lozinka.component';

describe('ZaposleniAzuriranjeLozinkaComponent', () => {
  let component: ZaposleniAzuriranjeLozinkaComponent;
  let fixture: ComponentFixture<ZaposleniAzuriranjeLozinkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaposleniAzuriranjeLozinkaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaposleniAzuriranjeLozinkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
