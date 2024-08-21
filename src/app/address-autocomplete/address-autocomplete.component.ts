import { Component } from '@angular/core';
import { AddressService } from '../../services/address.service';
import { CommonModule, NgFor } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { MapboxComponent } from "../mapbox/mapbox.component";

@Component({
  selector: 'app-address-autocomplete',
  standalone: true,
  imports: [CommonModule, MatInputModule, MapboxComponent],
  templateUrl: './address-autocomplete.component.html',
  styleUrl: './address-autocomplete.component.css'
})
export class AddressAutocompleteComponent {
  predictions: any[] = [];

  constructor(private addressService: AddressService) {}

  onInput(value: any): void {
    this.addressService.getPlacePredictions(value.target.value).subscribe((response) => {
      this.predictions = response.predictions;
    });
  }

  selectPrediction(prediction: any): void {
    console.log('Selected address:', prediction.description);
  }
}
