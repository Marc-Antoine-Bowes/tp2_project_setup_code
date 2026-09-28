# Project Setup 
C'est le squelette, le setup, sur lequel on pourrait construire un projet react native.

Pour faire run les tests unitaires : 

npm install --save-dev jest @types/jest

npm install --save-dev @testing-library/react-native

npm run test

un test est diponible pour voir comment les créer

Pour faire run les tests systèmes : 

Installer et s'inscrire sur Maestro : [Maestro](https://docs.maestro.dev/get-started/supported-platform/react-native)

utiliser Maestro pour faire jouer les tests, important de brancher son téléphone avant de lancer les tests ou utiliser
un émulateur.

Les tests seront disponibles dans le repo.

Il est important d'ajouter testID='' pour avoir la possibiliter de tester un composant ou un élément 


npx expo install expo-application