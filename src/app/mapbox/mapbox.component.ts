import { Component, AfterViewInit, Input } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environment } from '../../environment';

@Component({
  selector: 'app-mapbox',
  standalone: true,
  imports: [],
  templateUrl: './mapbox.component.html',
  styleUrl: './mapbox.component.css'
})
export class MapboxComponent {

  @Input() pickupLocation!: string;
  @Input() dropoffLocation!: string;

  ngAfterViewInit(): void {
    mapboxgl.accessToken = environment.mapboxApiKey
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40], // Default center
      zoom: 9
    });

    this.addRoute(map);
  }

  addRoute(map: mapboxgl.Map): void {
    const pickup = [-74.5, 40];
    const dropoff = [-73.9, 40.7];

    map.on('load', () => {
      map.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: [pickup, dropoff]
          }
        }
      });

      map.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#3887be',
          'line-width': 5
        }
      });
    });
  }

}
