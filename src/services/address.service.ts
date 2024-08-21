import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) {}

  getPlacePredictions(input: string): Observable<any> {
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${environment.googleMapsApiKey}`;
    return this.http.get(url);
  }
}
