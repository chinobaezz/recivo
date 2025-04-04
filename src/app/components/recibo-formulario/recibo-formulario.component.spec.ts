import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciboFormularioComponent } from './recibo-formulario.component';

describe('ReciboFormularioComponent', () => {
  let component: ReciboFormularioComponent;
  let fixture: ComponentFixture<ReciboFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReciboFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReciboFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
