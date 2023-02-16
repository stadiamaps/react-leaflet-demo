import './App.css'
import 'leaflet/dist/leaflet.css'
import {MapContainer, Marker, Popup} from 'react-leaflet'
import L from 'leaflet'
import MarkerClusterGroup from "react-leaflet-cluster";
import {MapLibreTileLayer} from "./MapLibreTileLayer.ts";
import arcades from './arcades.json'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function AppVector() {
  return (
    <div className="App">
      <MapContainer
        className="full-screen-map"
        center={[38, 139.69222]}
        zoom={6}
        minZoom={3}
        maxZoom={19}
        maxBounds={[[-85.06, -180], [85.06, 180]]}
        scrollWheelZoom={true}>
        <MapLibreTileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
          url={require('./gameboy.json')}
        />
        <MarkerClusterGroup>
          {arcades.features.map((arcade, index) => (
            <Marker
              key={arcade.properties['@id']}
              position={[arcade.geometry.coordinates[1], arcade.geometry.coordinates[0]]}
            >
              <Popup>
                {arcade.properties.name}
                <br />
                {arcade.properties['name:en']}
              </Popup>
            </Marker>
            ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

export default AppVector;
