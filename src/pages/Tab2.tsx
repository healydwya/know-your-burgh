import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.scss';
import logo from '../assets/logo.png';
import aug1 from '../assets/augustwilson1.png';
import rock from '../assets/rock-shelter.jpeg';
import aug2 from '../assets/augustwilson2.png';
import monmap from '../assets/mon-map.png';
import clemente1 from '../assets/veraclemente.jpeg';
import clemente2 from '../assets/clementes.jpeg';
import progress1 from '../assets/progress.jpeg';
import progress2 from '../assets/progress-bar-2.png';
import React, { useState, useEffect, Component } from 'react';
import { IonButton } from '@ionic/react';
import firebaseConfig from '../firebase.config';
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore';
import { initializeApp } from '@firebase/app';
import 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

const Tab2: React.FC = () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState<Array<any>>([]);
  const [currentItem, setItem] = useState({ desc: '', title: '', coverphoto: '', innerphoto: '', source: '' });
  const [value, loading, error] = useCollection(
    collection(db, 'items'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  useEffect(() => {
    if (items.length < 1) {
      let todos: any[] = [];
      if (value) {
        value.forEach(snapshot => {
          // each todo item looks like: {content: 'xxxxx', finished: true, id: 3unuq9yt4ndas}
          todos.push({
            ...snapshot.data(),
            id: snapshot.id
          });
        });
      }
      setItems(todos);
    }
  }, [items.length, value])

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
            <IonTitle size="large">Learn</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p>
          {error && <strong>Error: {JSON.stringify(error)}</strong>}
          {loading && <span>Collection: Loading...</span>}
        </p>
        {items && (
          <div className="cards">
            {items.map((doc) => (
              <React.Fragment key={doc.id}>
                <IonCard onClick={() => { setShowModal(true); setItem(doc); }}>
                  {doc.coverphoto === 'aug1' &&
                    <img className="card-img" alt="August Wilson Award Winning Black Playright from Pittsburgh" src={aug1}></img>
                  }
                  {doc.coverphoto === 'progress1' &&
                    <img className="card-img" alt="Progress Bar" src={progress1}></img>
                  }
                  {doc.coverphoto === 'monmap' &&
                    <img className="card-img" alt="Map of Pittsburgh River" src={monmap}></img>
                  }
                  {doc.coverphoto === 'clemente1' &&
                    <img className="card-img" alt="Vera Clemente" src={clemente1}></img>
                  }
                  <IonCardHeader>
                    <IonCardSubtitle>Local Knowledge</IonCardSubtitle>
                    <IonCardTitle>{doc.title} </IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              </React.Fragment>
            ))}
          </div>
        )}
        <IonModal isOpen={showModal} cssClass='my-custom-class'>
          {currentItem.innerphoto === 'aug2' &&
            <img className="modal-img" alt="August Wilson Award Winning Black Playright from Pittsburgh" src={aug2}></img>
          }
          {currentItem.innerphoto === 'rock' &&
            <img className="modal-img" alt="Native American archaeological findings in Pittsburgh" src={rock}></img>
          }
          {currentItem.innerphoto === 'progress2' &&
            <img className="modal-img" alt="progress bar which was invented at CMU" src={progress2}></img>
          }
          {currentItem.innerphoto === 'clemente2' &&
            <img className="modal-img" alt="Roberto Clemente in Pirates uniform with Vera his wife and children" src={clemente2}></img>
          }
          <div className="field"> {currentItem.desc} </div>
          <a className="field" href={currentItem.source}> {currentItem.source} </a>
          <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
