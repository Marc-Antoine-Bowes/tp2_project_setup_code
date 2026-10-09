import { initializeApp, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

process.env.FIRESTORE_EMULATOR_HOST = '127.0.0.1:8080';

const app =
  getApps().find((item) => item.name === 'jest-firestore') ??
  initializeApp({ projectId: 'demo-test' }, 'jest-firestore');

export const db = getFirestore(app);