import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  { path: 'list-ficha', loadChildren: './pages/list-ficha/list-ficha.module#ListFichaPageModule' },
  { path: 'perfil-ficha', loadChildren: './pages/perfil-ficha/perfil-ficha.module#PerfilFichaPageModule' },

  //{ path: 'add-ficha', loadChildren: './pages/add-ficha/add-ficha.module#AddFichaPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
