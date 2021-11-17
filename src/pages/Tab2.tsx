import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.scss';
import logo from '../assets/logo.png';
import augustwilson1 from '../assets/augustwilson1.png';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <img className="logo" alt="know your burgh logo with pittsburgh bridge" src={logo}></img>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonTitle>Learn</IonTitle>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Learn</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="cards">
          <IonCard>
            <img className="card-img" alt="cover for history card" src={augustwilson1}></img>
            <IonCardHeader>
              <IonCardSubtitle>Local History</IonCardSubtitle>
              <IonCardTitle>August Wilson's Childhood Home </IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard>
            <img className="card-img" alt="cover for history card" src={augustwilson1}></img>
            <IonCardHeader>
              <IonCardSubtitle>Local History</IonCardSubtitle>
              <IonCardTitle>August Wilson's Childhood Home </IonCardTitle>
            </IonCardHeader>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
