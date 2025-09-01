import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // Redirige la ruta raíz a /home
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    // Carga el PagesModule de forma diferida
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }