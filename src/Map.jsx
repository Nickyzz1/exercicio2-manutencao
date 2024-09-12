import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";
import App from './App';
import style from './Map.module.css'

const Map = () => {

    return (
    <>
    <App/>
        <>
          <div className={style.content}>
          <h2>Mapa</h2>
          <MapContainer  center={[-25.4249647,-49.272303]} zoom={13} scrollWheelZoom={true} style={{width:"100%", height: '400px'}}>
          <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-25.4249647,-49.272303]}>
            <Popup>
             <a href="https://www.google.com.br/maps/place/R.+Paula+Gomes,+270+-+Centro,+Curitiba+-+PR,+80510-030/@-25.4249647,-49.272303,17z/data=!4m6!3m5!1s0x94dce5795befda7d:0xfd4f054127f9a778!8m2!3d-25.4249647!4d-49.272303!16s%2Fg%2F11krkw3wp0?hl=pt-BR&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D" target='_blank'>Senai Celso Charuri</a>
            </Popup>
          </Marker>
        </MapContainer>
          </div>
         </>
</>)}

export default Map;


