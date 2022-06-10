import { IonMenu,IonList,IonItem,IonIcon,IonContent,IonPage, IonLabel, IonHeader, IonMenuToggle } from "@ionic/react";
import { paperPlane,heart,mail,trash,warning,archive } from "ionicons/icons";



const Menu:React.FC = () =>{
    return(
        <IonPage>
          
            <IonContent>
               
              
                
                   <IonList>
                       <IonItem>
                      <IonIcon slot="start" icon={paperPlane}></IonIcon>
                      <IonLabel>OutBox</IonLabel>
                       </IonItem>
                       <IonItem>
                       <IonIcon slot="start" icon={heart}></IonIcon>
                      <IonLabel>Favorites</IonLabel>

                       </IonItem>
                       <IonItem>
                       <IonIcon slot="start" icon={mail}></IonIcon>
                      <IonLabel>Inbox</IonLabel>

                       </IonItem>
                       <IonItem>
                       <IonIcon slot="start" icon={trash}></IonIcon>
                      <IonLabel>Trash</IonLabel>

                       </IonItem>
                       <IonItem>
                       <IonIcon slot="start" icon={warning}></IonIcon>
                      <IonLabel>Spam</IonLabel>

                       </IonItem>
                       <IonItem>
                       <IonIcon slot="start" icon={archive}></IonIcon>
                      <IonLabel></IonLabel>

                       </IonItem>
                   </IonList>
                  
                
            </IonContent>
          
        </IonPage>

    )
}
export default Menu;