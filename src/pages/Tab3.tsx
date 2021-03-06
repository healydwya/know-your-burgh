import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import pitt from '../assets/pittincline.jpeg';
import './Tab3.scss';
import logo from '../assets/logo.png';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <img className="logo" alt="know your burgh logo with pittsburgh bridge" src={logo}></img>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
        <div className="about-page">
          <img src={pitt} alt="pittsburgh skyline with bridge"></img>
          <p> Know Your ‘Burgh was born out of a class project for the Programming Usable Interfaces class at Carnegie Mellon University.</p>
          <p> When tasked with using a new framework to create a website or app of our choosing, I wanted to make sure it would positively impact my Pittsburgh community.</p>
          <p> The hope is that through using public wayfinding signs to draw peoples’ attention, I can raise awareness of transportation, history, and events that go on in neighborhoods around the city and engage people more with both their own and other neighborhoods they might not usually visit or think about. </p>
          <p>This is a first draft so please feel free to reach out with any feedback or local items you'd like showcased at healyd@cs.cmu.edu. </p>
        </div>
      </IonContent>
    </IonPage >
  );
};

export default Tab3;
