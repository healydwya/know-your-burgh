import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.scss';
import logo from '../assets/logo.png';
import aug1 from '../assets/augustwilson1.png';
import monmap from '../assets/mon-map.png';
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
                <IonCard onClick={() => setShowModal(true)}>
                  {doc.coverphoto === 'aug1' &&
                    <img className="card-img" alt="cover for history card" src={aug1}></img>
                  }
                  {doc.coverphoto === 'monmap' &&
                    <img className="card-img" alt="cover for history card" src={monmap}></img>
                  }
                  <IonCardHeader>
                    <IonCardSubtitle>Local Knowledge</IonCardSubtitle>
                    <IonCardTitle>{doc.title} </IonCardTitle>
                  </IonCardHeader>
                </IonCard>
                <IonModal isOpen={showModal} cssClass='my-custom-class'>
                  {doc.coverphoto === 'aug1' &&
                    <img className="card-img" alt="cover for history card" src={aug1}></img>
                  }
                  <div className="desc"> {doc.desc} </div>
                  <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
                </IonModal>
              </React.Fragment>
            ))}
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
