import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.scss';
import logo from '../assets/logo.png';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <img className="logo" alt="know your burgh logo with pittsburgh bridge" src={logo}></img>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonTitle>Map</IonTitle>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Map</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Map page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
