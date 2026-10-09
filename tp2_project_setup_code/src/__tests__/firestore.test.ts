import { db } from '../testFirestoreConfig';

describe('Firestore', () => {
  const createUserRef = () =>
    db.collection('users').doc(
      `test-user-${Date.now()}-${Math.random()}`
    );

  test('crée un document utilisateur', async () => {
    const userRef = createUserRef();

    await userRef.set({
      name: 'John Doe',
      email: 'john@example.com',
      age: 30,
    });

    const snapshot = await userRef.get();

    expect(snapshot.exists).toBe(true);
    expect(snapshot.data()).toEqual({
      name: 'John Doe',
      email: 'john@example.com',
      age: 30,
    });

    await userRef.delete();
  }, 15000);

  test('lit un document utilisateur', async () => {
    const userRef = createUserRef();

    await userRef.set({
      name: 'Jane Doe',
      email: 'jane@example.com',
    });

    const snapshot = await userRef.get();

    expect(snapshot.exists).toBe(true);
    expect(snapshot.data()?.name).toBe('Jane Doe');
    expect(snapshot.data()?.email).toBe('jane@example.com');

    await userRef.delete();
  });

  test('modifie un document utilisateur', async () => {
    const userRef = createUserRef();

    await userRef.set({
      name: 'John Doe',
      age: 30,
    });

    await userRef.update({ age: 31 });

    const snapshot = await userRef.get();

    expect(snapshot.data()?.age).toBe(31);

    await userRef.delete();
  });

  test('supprime un document utilisateur', async () => {
    const userRef = createUserRef();

    await userRef.set({ name: 'John Doe' });
    await userRef.delete();

    const snapshot = await userRef.get();

    expect(snapshot.exists).toBe(false);
  });
});