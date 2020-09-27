import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBwFCKC3z-GJQVCKtvbAYDPGNHtITDl8d0',
  authDomain: 'startrip-5659c.firebaseapp.com',
  databaseURL: 'https://startrip-5659c.firebaseio.com',
  projectId: 'startrip-5659c',
  storageBucket: 'startrip-5659c.appspot.com',
  messagingSenderId: '412379722907',
  appId: '1:412379722907:web:cfb7d57323cc98fb53023e'
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
