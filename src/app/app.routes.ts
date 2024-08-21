import { Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { HomeComponent } from './home/home.component';
import { MapboxComponent } from './mapbox/mapbox.component';
import { AddressAutocompleteComponent } from './address-autocomplete/address-autocomplete.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'map', component: AddressAutocompleteComponent },
];
