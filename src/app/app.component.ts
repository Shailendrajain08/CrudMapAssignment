import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddressAutocompleteComponent } from './address-autocomplete/address-autocomplete.component';
import { CrudComponent } from './crud/crud.component';

import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddressAutocompleteComponent, CrudComponent,  NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-crud-map';
}
