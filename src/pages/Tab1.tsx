import { IonButton,  IonCard,  IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList,  IonMenu,  IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { archive, heart, mail, menu, paperPlane, trash, warning } from 'ionicons/icons';

import './Tab1.css';

type Item = {
  src: string;
  text: string;
};
const items: Item[] = [{ src: '../assets/image/images.jpg', text: 'a picture of a cat' },
{ src: '../assets/image/images 8.jpg', text: 'a picture of a cat' },
{ src: '../assets/image/images.jpg', text: 'a picture of a dog' },
{ src: '../assets/image/images8.jpg', text: 'a picture of a tree' },
{ src: '../assets/image/images2.jpg', text: 'a picture of a plan' },
{ src: '../assets/image/images3.jpg', text: 'a picture of a design' },
{ src: '../assets/image/images4.jpg', text: 'a picture of a design' },
{ src: '../assets/image/images5.jpg', text: 'a picture of a design' },
{ src: '../assets/image/images6.jpg', text: 'a picture of a design' },
{ src: '../assets/image/images7.jpg', text: 'a picture of a design' },
{ src: '../assets/image/music1.jpg', text: 'a picture of a design' },
];
const item: Item[] = [{ src: '../assets/image/images.jpg', text: 'a picture of a cat' },
{ src: '../assets/image/images 8.jpg', text: 'a picture of a cat' },
{ src: '../assets/image/images.jpg', text: 'a picture of a dog' },
{ src: '../assets/image/images8.jpg', text: 'a picture of a tree' },
{ src: '../assets/image/images2.jpg', text: 'a picture of a plan' },
{ src: '../assets/image/images3.jpg', text: 'a picture of a design' },
{ src: '../assets/image/images4.jpg', text: 'a picture of a design' },
{ src: '../assets/image/images5.jpg', text: 'a picture of a design' },
{ src: '../assets/image/images6.jpg', text: 'a picture of a design' },
{ src: '../assets/image/images7.jpg', text: 'a picture of a design' },
{ src: '../assets/image/music1.jpg', text: 'a picture of a design' },
];
const Tab1: React.FC = () => {
  
  return (
    <IonPage>
      <IonHeader >
        <IonToolbar color='primary'>
     
         <IonButton  href='/Menu'> <IonIcon  icon={menu}  ></IonIcon></IonButton> 
          <IonTitle> 
         
          Home </IonTitle>
      
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <ExploreContainer name="Tab 1 page" /><IonList>
          <IonGrid>
            <IonRow>
              {item.map((imag,k) =>(
                <IonCol size='12'>
                <IonItem  key={k} >
        <IonThumbnail>
            <IonImg src={imag.src} />
            </IonThumbnail>
              <IonLabel>{imag.text}</IonLabel> 
              </IonItem>
              </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </IonList>

        <IonList>
          <IonHeader>on my pics</IonHeader>
        <IonGrid>
          <IonRow>
        
           
      {items.map((image, i) => (
        <IonCol 
        size='6'  key={i}  >
       
        <IonCard>
            <IonImg src={image.src} />
          <IonItem>
            <IonLabel>{image.text}</IonLabel>  
           </IonItem>
           </IonCard>
        </IonCol>
      ))} 
      
   
        </IonRow>
        </IonGrid>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
