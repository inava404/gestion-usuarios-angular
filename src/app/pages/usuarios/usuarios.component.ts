import { Component, OnInit } from '@angular/core';
import { UsuariosService, Usuario } from 'src/app/pages/services/usuarios.service'; // <-- ajusta la ruta correcta

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  cargando = true;

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.usuariosService.getUsuarios().subscribe((data: Usuario[]) => {
        this.usuarios = data;
        this.cargando = false;
      });
    }, 5000);
  }
}
