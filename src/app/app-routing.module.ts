import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'countries',
    pathMatch: 'full'
  },
  {
    path: 'countries',
    loadChildren: () => import('./view/countries/countries.module').then( m => m.CountriesPageModule)
  },
  {
    path: 'country-details/:cca3',
    loadChildren: () => import('./view/country-details/country-details.module').then( m => m.CountryDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
