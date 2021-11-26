import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.scss';
import logo from '../assets/logo.png';
import { Geolocation, Position } from '@capacitor/geolocation';
import { useState } from 'react';
import GoogleMapReact from 'google-map-react';

const Tab1: React.FC = () => {
  const Marker = ({ text, lat, lng }: { text: string, lat: number, lng: number }) => <div><IonIcon name="pin"> {text} </IonIcon></div>;
  const [coords, setCoords] = useState({ lat: 40.4406, lng: -79.9959 });
  let gpsOptions = { enableHighAccuracy: true };
  const printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition(gpsOptions);
    const coord = {
      lat: coordinates.coords.latitude,
      lng: coordinates.coords.longitude
    };
    if (coords === { lat: 0, lng: 0 }) {
      setCoords(coord);
    }
  };
  printCurrentPosition();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <img className="logo" alt="know your burgh logo with pittsburgh bridge" src={logo}></img>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Map</IonTitle>
          </IonToolbar>
        </IonHeader>
        {coords !== { lat: 0, lng: 0 } &&
          <GoogleMapReact
            bootstrapURLKeys={{ key: '' }}
            defaultZoom={12} defaultCenter={coords} yesIWantToUseGoogleMapApiInternals
          >
            <Marker text="My Marker" lat={40.46671212672198} lng={-79.93496425614721} />
          </GoogleMapReact>}
        {!coords && <span> Location not available </span>}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
