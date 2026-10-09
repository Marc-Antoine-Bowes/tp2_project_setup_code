import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import {
  connectFirestoreEmulator,
  initializeFirestore,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'test-api-key',
  authDomain: 'demo-test.firebaseapp.com',
  projectId: 'demo-test',
  storageBucket: 'demo-test.appspot.com',
  messagingSenderId: '123456789',
  appId: 'test-app-id',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

connectAuthEmulator(auth, 'http://127.0.0.1:9099', {
  disableWarnings: true,
});

connectFirestoreEmulator(db, '127.0.0.1', 8080);