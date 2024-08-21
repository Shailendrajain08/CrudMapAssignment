# Angular CRUD with Google Address Autocomplete and Mapbox Integration

## Overview

This project is an Angular application that demonstrates basic CRUD operations, Google Address Autocomplete, and Mapbox integration. The application allows users to enter pickup and dropoff addresses, view a route between them on a Mapbox map, and perform CRUD operations.

## Features

- **CRUD Operations**: Basic Create, Read, Update, and Delete operations using a simple JSON server.
- **Google Address Autocomplete**: Autocompletes addresses for both pickup and dropoff locations using Google Places API.
- **Mapbox Integration**: Displays a route between the pickup and dropoff addresses on a Mapbox map.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- Angular CLI installed globally (`npm install -g @angular/cli`).
- A free Google API key for Places API.
- A free Mapbox API token.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/angular-crud-map.git
   cd angular-crud-map

   ```

2. Install the dependencies:

  npm install

3. Install json-server for the backend:

  npm install -g json-server

4. Set up your API keys:

  Replace your-google-api-key in index.html with your Google API key.
  Replace your-mapbox-access-token in mapbox.component.ts with your Mapbox token.


## Running the Application

1. Start the JSON server:

    json-server --watch db.json

2. Run the Angular application:

    ng serve

3. Open your browser and navigate to http://localhost:4200.
