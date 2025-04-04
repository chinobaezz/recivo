import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Importar CommonModule
import { FormsModule } from '@angular/forms'; // ✅ Necesario para ngModel

@Component({
  selector: 'app-recibo-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Agregar aquí
  templateUrl: './recibo-formulario.component.html',
  styleUrl: './recibo-formulario.component.css'
})
export class ReciboFormularioComponent {
  recibo = {
    basico: 0,
    horasExtras: 0,
    otrosConceptos: 0
  };
  resultado = 0;

  calcularRecibo() {
    this.resultado = this.recibo.basico + this.recibo.horasExtras + this.recibo.otrosConceptos;
  }
}
