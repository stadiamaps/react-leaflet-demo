import './App.css'
import 'leaflet/dist/leaflet.css'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import L from 'leaflet'
import MarkerClusterGroup from "react-leaflet-cluster";


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


function App() {
  return (
    <div className="App">
      <MapContainer className="MainMap" center={[51.505, -0.09]} zoom={4} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        <MarkerClusterGroup>
          <Marker position={[49.8397, 24.0297]}>
            <Popup>
              Popup 1
            </Popup>
          </Marker>
          <Marker position={[52.2297, 21.0122]}>
            <Popup>
              Popup 2
            </Popup>
          </Marker>
          <Marker position={[51.5074, -0.0901]}>
            <Popup>
              Popup 3
            </Popup>
          </Marker>
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

export default App;
