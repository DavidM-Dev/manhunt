import firebase from 'firebase';

export function subscribeToGameUpdates(updateCurrentGameState) {
  const firebaseConfig = {
    apiKey: "AIzaSyAsQPZmUAX-vWfxqAjjjW5RrzIyb1mTTIM",
    authDomain: "manhunt-9d5b4.firebaseapp.com",
    databaseURL: "https://manhunt-9d5b4.firebaseio.com",
    projectId: "manhunt-9d5b4",
    storageBucket: "manhunt-9d5b4.appspot.com",
    messagingSenderId: "467777965790",
    appId: "1:467777965790:web:7b3e42c8e9be8df9557c4f"
  };
  
  firebase.initializeApp(firebaseConfig);
  firebase.database().ref('/game-1').on('value', (snapshot) => {
    updateCurrentGameState(snapshot.val());
  })
}

