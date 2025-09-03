import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  usuario = {
    nombre: 'Juan Pérez',
    email: 'juan.perez@example.com',
    telefono: '+52 222 123 4567',
    direccion: 'Av. Reforma 123, Puebla, México',
    fechaNacimiento: '1999-08-15'
  };
}
