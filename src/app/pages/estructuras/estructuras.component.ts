import { Component } from '@angular/core';

@Component({
  selector: 'app-estructuras',
  templateUrl: './estructuras.component.html',
  styleUrls: ['./estructuras.component.css']
})
export class EstructurasComponent {
  // Para *ngIf
  mostrarMensaje = true;

  // Para *ngFor
  tecnologias = ['Angular', 'TypeScript', 'NodeJS', 'Ionic', 'NPM'];

  // Para *ngSwitch
  opcion = 'angular'; // valor por defecto
}
  