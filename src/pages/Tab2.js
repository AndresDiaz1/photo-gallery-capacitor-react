import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet
} from "@ionic/react";
import { camera, trash, close } from "ionicons/icons";
import { usePhotoGallery } from "../hooks/usePhotoGallery";

// export interface Photo {
//   filepath: string;
//   webviewPath?: string;
//   base64?: string;
// }
const Tab2 = () => {
  const { deletePhoto, photos, takePhoto } = usePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState();

  const tomafoto = () => {
    takePhoto();
    // setTimeout(() => {
    //   console.log("el docuemnto", document);
    //   const video = document
    //     .querySelector("pwa-camera-modal-instance")
    //     .shadowRoot.querySelector("pwa-camera")
    //     .shadowRoot.querySelector(".camera-wrapper .camera-video video");
    //   video.style.transform = null;
    // }, 3000);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <button>pepe</button>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Photo Gallery</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={index}>
                <IonImg
                  onClick={() => setPhotoToDelete(photo)}
                  src={photo.base64 ?? photo.webviewPath}
                />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => tomafoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>

        <IonActionSheet
          isOpen={!!photoToDelete}
          buttons={[
            {
              text: "Delete",
              role: "destructive",
              icon: trash,
              handler: () => {
                if (photoToDelete) {
                  deletePhoto(photoToDelete);
                  setPhotoToDelete(undefined);
                }
              }
            },
            {
              text: "Cancel",
              icon: close,
              role: "cancel"
            }
          ]}
          onDidDismiss={() => setPhotoToDelete(undefined)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
