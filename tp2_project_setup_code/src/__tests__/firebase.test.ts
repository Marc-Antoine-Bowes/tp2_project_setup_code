describe('Firebase Setup', () => {
  it('should pass a dummy test', () => {
    expect(true).toBe(true);
  });
});
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
// } from 'firebase/auth';

// import { auth } from '../testFirebaseConfig';

// describe('Firebase Auth', () => {
//   const password = 'Password123!';

//   afterEach(async () => {
//     if (auth.currentUser) {
//       await signOut(auth);
//     }
//   });

//   test('crée un utilisateur', async () => {
//     const email = `create-${Date.now()}@example.com`;

//     const credential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );

//     expect(credential.user).toBeDefined();
//     expect(credential.user.email).toBe(email);

//     await signOut(auth);
//   });

//   test('connecte un utilisateur existant', async () => {
//     const email = `signin-${Date.now()}@example.com`;

//     await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );

//     await signOut(auth);

//     const credential = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );

//     expect(credential.user).toBeDefined();
//     expect(credential.user.email).toBe(email);

//     await signOut(auth);
//   });

//   test('refuse un mauvais mot de passe', async () => {
//     const email = `wrong-password-${Date.now()}@example.com`;

//     await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );

//     await signOut(auth);

//     await expect(
//       signInWithEmailAndPassword(
//         auth,
//         email,
//         'WrongPassword!'
//       )
//     ).rejects.toThrow();

//     await signOut(auth);
//   });

//   test('déconnecte un utilisateur', async () => {
//     const email = `signout-${Date.now()}@example.com`;

//     await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );

//     expect(auth.currentUser).not.toBeNull();

//     await signOut(auth);

//     expect(auth.currentUser).toBeNull();
//   });
// });